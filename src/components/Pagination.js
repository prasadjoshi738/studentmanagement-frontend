import React from 'react';

const Pagination = ({ page, totalPages, setPage }) => (
  <nav className="mt-3">
    <ul className="pagination justify-content-center">
      <li className={`page-item ${page === 1 && 'disabled'}`}>
        <button className="page-link" onClick={() => setPage(page - 1)}>Previous</button>
      </li>
      {[...Array(totalPages)].map((_, i) => (
        <li key={i} className={`page-item ${page === i + 1 ? 'active' : ''}`}>
          <button className="page-link" onClick={() => setPage(i + 1)}>{i + 1}</button>
        </li>
      ))}
      <li className={`page-item ${page === totalPages && 'disabled'}`}>
        <button className="page-link" onClick={() => setPage(page + 1)}>Next</button>
      </li>
    </ul>
  </nav>
);

export default Pagination;
