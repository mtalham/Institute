import React from "react";
import { Field, reduxForm } from "redux-form";
import RenderField from "../../utils/RenderField";
import validate from "./StudentFormValidation";

const StudentForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <Field
          name="firstName"
          component={RenderField}
          type="text"
          label="First Name"
        />
      </div>
      <div className="form-group">
        <Field
          name="lastName"
          component={RenderField}
          type="text"
          label="Last Name"
        />
      </div>

      <div className="form-group">
        <Field
          name="email"
          component={RenderField}
          type="email"
          label="Email"
        />
      </div>
      <input type="submit" className="btn btn-primary btn-block mt-4" />
    </form>
  );
};

const withReduxForm = reduxForm({
  form: "StudentForm",
  validate
});

export default withReduxForm(StudentForm);
