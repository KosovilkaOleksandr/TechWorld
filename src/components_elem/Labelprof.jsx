import React from "react";
import styles from "C:/ttt/newappt/src/components/css/labelprof.module.css";

const Labelprof = (props) => {
  return <label className={styles.textbox}>{props.text}</label>;
};

export default Labelprof;
