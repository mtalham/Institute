import React from "react";
import { useApollo } from "./StudentApollo";
import StudentForm from "./StudentForm";

const AddStudent = ({ history }) => {
  const { createStudent } = useApollo();

  const handleOnSubmit = async values => {
    await createStudent({ variables: values });
    history.push("/students");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 m-auto">
          <h4 className="display-5 text-center">Add Student Form</h4>
          <StudentForm onSubmit={handleOnSubmit} />
        </div>
      </div>
    </div>
  );
};

export default AddStudent;
