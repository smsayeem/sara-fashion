import React from "react";
import "./style.scss";

function FormInput({ handleChange, label, ...otherSigninProps }) {
  return (
    <div className="group">
      <input
        className="form-input"
        onChange={handleChange}
        {...otherSigninProps}
      />
      {label ? (
        <label
          className={`${
            otherSigninProps.value.length ? "shrink" : ""
          } form-imput-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
}
export default FormInput;
