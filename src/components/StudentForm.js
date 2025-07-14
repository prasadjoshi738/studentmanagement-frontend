import React from 'react';

const StudentForm = ({ form, handleInput, handleMarkChange, addMarkField, handleSubmit, editing }) => (
  <div className="card shadow-sm p-4">
    <h4>{editing ? 'Edit Student' : 'Add Student'}</h4>
    <form onSubmit={handleSubmit}>
      <input className="form-control mb-2" name="name" value={form.name} onChange={handleInput} placeholder="Name" />
      <input className="form-control mb-2" name="email" value={form.email} onChange={handleInput} placeholder="Email" />
      <input className="form-control mb-3" name="age" type="number" value={form.age} onChange={handleInput} placeholder="Age" />
      <h5>Subjects & Marks</h5>
      {form.marks.map((mark, i) => (
        <div className="row mb-2" key={i}>
          <div className="col">
            <input className="form-control" placeholder="Subject" value={mark.subject} onChange={e => handleMarkChange(i, 'subject', e.target.value)} />
          </div>
          <div className="col">
            <input className="form-control" placeholder="Mark" type="number" value={mark.mark} onChange={e => handleMarkChange(i, 'mark', e.target.value)} />
          </div>
        </div>
      ))}
      <button type="button" className="btn btn-outline-secondary mb-3" onClick={addMarkField}>+ Add Subject</button><br />
      <button className="btn btn-success w-100" type="submit">{editing ? 'Update' : 'Create'}</button>
    </form>
  </div>
);

export default StudentForm;
