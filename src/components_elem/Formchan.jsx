import React from "react";
import styles from "../components/css/formchan.module.css";

const Formchan = (props) => {
  return (
    <input
      className={styles.input}
      placeholder={props.placeholder}
      type={props.type}
    ></input>
  );
};

export default Formchan;
