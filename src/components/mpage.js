// src/MyPage.js
import React from "react";
import styles from "./css/mpage.module.css";
import Button1 from "../components_elem/Button1";
import Forminp from "../components_elem/Forminp";
//testing
function MyPage() {
  return (
    <div>
      <h1>Моя сторінка:</h1>
      <p>Вітаю вас!</p>
      <button className="button">Click Me</button>
    </div>
  );
}

export default MyPage;
