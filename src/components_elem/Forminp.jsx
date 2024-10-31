import React from "react";
import styles from "C:/ttt/newappt/src/components/css/form_in.module.css";

const Forminp = (props) => {
  return (
    <input
      className={styles.textboxinput}
      placeholder={props.placeholder}
      type={props.type}
    ></input>
  );
};

export default Forminp;
