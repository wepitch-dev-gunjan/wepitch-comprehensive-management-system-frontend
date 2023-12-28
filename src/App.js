import * as React from 'react';
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Login from "./pages/login"
import Profile from "./pages/profile"
import Voucher from "./pages/voucher"
import Home from "./pages/home"
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login user='rakshita' />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/home" element={<Home />} />
        <Route path="/voucher" element={<Voucher />} />
      </Routes>
    </div>
  );
}

export default App;
