import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyPage from "./mpage";
import Log from "./log";
import Testik from "./testik";
import Magazine from "./MainMag";
import Profile from "./profile";
import Tovar from "./tovar";
import Tovar1 from "./tovar1";
import Tovar2 from "./tovar2";
import Tovar3 from "./tovar3";
import Tovar4 from "./tovar4";
import Promo from "./promo";
import Busket from "./busket";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Log />} />
        <Route path="/" element={<MyPage />} />
        <Route path="/test" element={<Testik />} />
        <Route path="/main_page" element={<Magazine />} />
        <Route path="/main_page/profile" element={<Profile />} />
        <Route path="main_page/tovar" element={<Tovar />} />
        <Route path="main_page/tovar1" element={<Tovar1 />} />
        <Route path="main_page/tovar2" element={<Tovar2 />} />
        <Route path="main_page/tovar3" element={<Tovar3 />} />
        <Route path="main_page/tovar4" element={<Tovar4 />} />
        <Route path="main_page/promo" element={<Promo />} />
        <Route path="main_page/busket" element={<Busket />} />
        <Route path="/main_page/tovar/:id" element={<Tovar />} />{" "}
        <Route path="/main_page/tovar1/:id" element={<Tovar1 />} />{" "}
        <Route path="/main_page/tovar2/:id" element={<Tovar2 />} />{" "}
        <Route path="/main_page/tovar3/:id" element={<Tovar3 />} />{" "}
        <Route path="/main_page/tovar4/:id" element={<Tovar4 />} />{" "}
      </Routes>
    </Router>
  );
}

export default App;
