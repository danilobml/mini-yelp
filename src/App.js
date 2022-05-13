import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Restaurant from "./components/Restaurant/Restaurant";
import data from "./data/data.json";

function App() {
  const restaurants = data;
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant" element={<Restaurant restaurants={restaurants} />} />
      </Routes>
    </div>
  );
}

export default App;
