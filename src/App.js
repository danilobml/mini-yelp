import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Restaurant from "./components/Restaurant/Restaurant";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import data from "./data/data.json";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const restaurants = data;
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant/:id" element={<Restaurant restaurants={restaurants} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
