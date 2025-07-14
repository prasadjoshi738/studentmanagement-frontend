import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const Layout = ({ children }) => (
  <div>
      <Header />
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
      <div className="container">
        <Link className="navbar-brand" to="/">Student Manager</Link>
      </div>
    </nav>
    <main className="container">{children}</main>
  </div>
);

export default Layout;
