import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyPage from "./mpage";
import Log from "./log";
import Testik from "./testik";
import Magazine from "./MainMag";
import Profile from "./profile";
import Tovar from "./tovar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Log />} />
        <Route path="/" element={<MyPage />} />
        <Route path="/test" element={<Testik />} />
        <Route path="main_page" element={<Magazine />} />
        <Route path="/main_page/profile" element={<Profile />} />
        <Route path="main_page/tovar" element={<Tovar />} />
      </Routes>
    </Router>
  );
}

export default App;
