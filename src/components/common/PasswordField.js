import React from "react";

const PasswordField = ({placeholder, setValue, password}) => {
  return (
    <>
      <div className="fieldmain">
        <label className="laable">{placeholder}</label>
        <input
        className="inpClass"
        placeholder={placeholder}
        type='password'
        value={password}
        onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </>
  );
};

export default PasswordField;
