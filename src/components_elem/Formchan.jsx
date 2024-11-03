import React from "react";
import styles from "../components/css/formchan.module.css";

const Formchan = (props) => {
  return (
    <input
      className={styles.input}
      placeholder={props.placeholder}
      type={props.type}
      value={props.value}
      onChange={props.onChange}
      text={props.text}
    ></input>
  );
};

export default Formchan;
