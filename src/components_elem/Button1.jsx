import React from "react";
import styles from "C:/ttt/newappt/src/components/css/button.module.css";

const Button1 = function (props) {
  return (
    <button onClick={props.functions} className={styles.submitButton}>
      {props.children}
    </button>
  );
};

export default Button1;
