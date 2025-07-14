// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './Pages/Home.js';
import EditStudent from './Pages/EditStudent.js'
import Header from './components/Header.js';

const App = () => (
  <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit/:id" element={<EditStudent />} />
      </Routes>
    </Layout>
  </Router>
);

export default App;
