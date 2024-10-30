import React from "react";
import styles from "C:/ttt/newappt/src/components/css/label.module.css";

const Label1 = (props) => {
  return <label className={styles.textboxlabel}>{props.text}</label>;
};

export default Label1;
