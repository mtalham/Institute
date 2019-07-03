import React from "react";

const RenderField = ({
  input,
  label,
  type,
  disabled,
  meta: { touched, error }
}) => (
  <div className="alert-danger">
    <input
      {...input}
      placeholder={label}
      type={type}
      disabled={disabled}
      className="form-control form-control-lg"
    />
    {touched && (error && <span>{error}</span>)}
  </div>
);

export default RenderField;