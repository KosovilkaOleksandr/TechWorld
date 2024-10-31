import React from "react";
import styles from "C:/ttt/newappt/src/components/css/form_in.module.css";

const Forminp = function (props) {
  return (
    <input
      className={styles.textboxinput}
      placeholder={props.placeholder}
      type={props.type}
      value={props.value}
      onChange={(e) => props.setState(e.target.value)}
    ></input>
  );
};

export default Forminp;
