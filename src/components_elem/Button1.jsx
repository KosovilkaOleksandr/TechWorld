import React from "react";
import styles from "C:/ttt/newappt/src/components/css/button.module.css";

const Button1 = (props) => {
  return (
    <button onClick={props.onClick} className={styles.submitButton}>
      {props.children}
    </button>
  );
};

export default Button1;
