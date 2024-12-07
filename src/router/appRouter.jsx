import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Layout from '../layout/layout';
import PrivacyPolicy from '../pages/privacyPolicy/privacyPolicy';
import Navbar from '../pages/navbar/navbar';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar/>} />
        <Route path="/policy" element={<PrivacyPolicy/>} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
