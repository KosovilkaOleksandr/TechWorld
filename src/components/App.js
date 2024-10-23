// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Импортируйте Routes
import MyPage from "./mpage"; // Убедитесь, что путь к файлу правильный
import Login from "./log"; // Убедитесь, что путь к файлу правильный

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<MyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
