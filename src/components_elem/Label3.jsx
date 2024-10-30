import React from "react";
import labstyle from "../components/css/labelmenuprof.module.css";

const Label3 = (props) => {
  return <label className={labstyle.label}>{props.text}</label>;
};

export default Label3;
