import React from "react";
import labstyle from "../components/css/labelmag.module.css";

const Label2 = (props) => {
  return <label className={labstyle.textboxlabel}>{props.text}</label>;
};

export default Label2;
