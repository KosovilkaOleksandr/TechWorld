import React from "react";
import styles from "C:/ttt/newappt/src/components/css/buttonprof.module.css";

const Buttonprof = (props) => {
  return (
    <button onClick={props.onClick} className={styles.submitButton}>
      {props.children}
    </button>
  );
};

export default Buttonprof;
