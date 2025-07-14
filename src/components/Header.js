// src/components/Header.js
import React from 'react';

const Header = () => {
  const apiDocsUrl = process.env.REACT_APP_API_DOCS_URL;
  console.log(apiDocsUrl)

  const openAPIDocs = () => {
    if (apiDocsUrl) {
      window.open(apiDocsUrl, '_blank');
    } else {
      alert('API Docs URL not configured');
    }
  };

  return (
    <nav className="navbar navbar-light bg-light justify-content-between px-4 mb-4">
      <span className="navbar-brand h4">Student Performance</span>
      <button className="btn btn-outline-primary" onClick={openAPIDocs}>
        Open API Docs
      </button>
    </nav>
  );
};

export default Header;
