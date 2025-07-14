import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import StudentForm from '../components/StudentForm';

const API_URL = process.env.REACT_APP_API_URL;
console.log(API_URL)

const EditStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', age: '', email: '', marks: [{ subject: '', mark: '' }] });

  useEffect(() => {
    axios.get(`${API_URL}/${id}`).then(res => {
      setForm(res.data);
    });
  }, [id]);

  const handleInput = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleMarkChange = (i, key, val) => {
    const newMarks = [...form.marks];
    newMarks[i][key] = val;
    setForm({ ...form, marks: newMarks });
  };

  const addMarkField = () => setForm({ ...form, marks: [...form.marks, { subject: '', mark: '' }] });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${API_URL}/${id}`, form);
      Swal.fire('Updated!', '', 'success');
      navigate('/');
    } catch (err) {
      Swal.fire('Error', err.response?.data?.error || 'Something went wrong', 'error');
    }
  };

  return (
    <StudentForm
      form={form}
      handleInput={handleInput}
      handleMarkChange={handleMarkChange}
      addMarkField={addMarkField}
      handleSubmit={handleSubmit}
      editing={true}
    />
  );
};

export default EditStudent;
