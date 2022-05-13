import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import User from './pages/User';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="user" element={<User />} />
    </Routes>
  )
}

export default App;

