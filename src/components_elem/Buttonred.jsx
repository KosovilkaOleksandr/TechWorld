import React from "react";
import styles from "C:/ttt/newappt/src/components/css/redbutton.module.css";

const Buttonred = (props) => {
  return (
    <button onClick={props.functions} className={styles.button}>
      {props.children}
    </button>
  );
};

export default Buttonred;
