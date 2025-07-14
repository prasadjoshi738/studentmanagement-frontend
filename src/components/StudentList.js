import React from 'react';
import { useNavigate } from 'react-router-dom';

const StudentList = ({ students, handleDelete }) => {
  const navigate = useNavigate();
  return (
    <div className="card shadow-sm p-4">
      <h4>Student List</h4>
      <table className="table table-hover mt-3">
        <thead className="table-light">
          <tr><th>Name</th><th>Email</th><th>Age</th><th>Actions</th></tr>
        </thead>
        <tbody>
          {students.map(s => (
            <tr key={s.id}>
              <td>{s.name}</td>
              <td>{s.email}</td>
              <td>{s.age}</td>
              <td>
                <button className="btn btn-warning btn-sm me-2" onClick={() => navigate(`/edit/${s.id}`)}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(s.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
