const validate = values => {
  const errors = {};
  if (!values.first) {
    errors.first = "First name is required";
  }
  if (!values.last) {
    errors.last = "Last name is required";
  }
  if (!values.email) {
    errors.email = "Email is required";
  }
  return errors;
};

export default validate;
