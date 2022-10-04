import React from "react";
import { Placeholder } from "react-bootstrap";
import "./style.css";
const Fields = ({ placeholder, handlechange, value }) => {
  return (
    <div className="fieldmain">
      <label className="laable"> {placeholder}</label>
      <input className="inpClass" placeholder={placeholder}
      value={value}
      onChange={
        handlechange}
      />
    </div>
  );
};

export default Fields;
