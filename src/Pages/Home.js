import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import StudentForm from '../components/StudentForm';
import StudentList from '../components/StudentList';
import Pagination from '../components/Pagination';

const API_URL = process.env.REACT_APP_API_URL;

const Home = () => {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({ name: '', age: '', email: '', marks: [{ subject: '', mark: '' }] });
  const [page, setPage] = useState(1);
  const [limit] = useState(5);
  const [totalPages, setTotalPages] = useState(1);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    axios.get(`${API_URL}?page=${page}&limit=${limit}`).then(res => {
      setStudents(res.data.data);
      setTotalPages(Math.ceil(res.data.total / limit));
    });
  }, [page, refresh]);

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
      await axios.post(API_URL, form);
      Swal.fire('Created!', '', 'success');
      setForm({ name: '', age: '', email: '', marks: [{ subject: '', mark: '' }] });
      setRefresh(!refresh);
    } catch (err) {
      Swal.fire('Error', err.response?.data?.error || 'Something went wrong', 'error');
    }
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({ title: 'Delete this student?', showCancelButton: true, confirmButtonText: 'Delete' });
    if (result.isConfirmed) {
      await axios.delete(`${API_URL}/${id}`);
      Swal.fire('Deleted!', '', 'success');
      setRefresh(!refresh);
    }
  };

  return (
    <div className="row">
      <div className="col-md-5">
        <StudentForm
          form={form}
          handleInput={handleInput}
          handleMarkChange={handleMarkChange}
          addMarkField={addMarkField}
          handleSubmit={handleSubmit}
          editing={false}
        />
      </div>
      <div className="col-md-7">
        <StudentList students={students} handleDelete={handleDelete} />
        <Pagination page={page} totalPages={totalPages} setPage={setPage} />
      </div>
    </div>
  );
};

export default Home;
