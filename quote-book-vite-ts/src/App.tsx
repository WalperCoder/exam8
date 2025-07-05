import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/Category';
import Submit from './pages/Submit';
import Edit from './pages/Edit';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:id" element={<Category />} />
      <Route path="/submit" element={<Submit />} />
      <Route path="/edit/:id" element={<Edit />} />
    </Routes>
  </Router>
);

export default App;