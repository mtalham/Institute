import React, { useState } from "react";
import { useApollo } from "./StudentApollo";
import UpdateStudent from "./studentforms/UpdateStudent";

const EmailSection = ({ student }) => {
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const { deleteStudent } = useApollo();

  const handleDelete = async () => {
    await deleteStudent({ variables: { uuid: student.uuid } });
  };

  return (
    <>
      {student.email}
      <i className="fa fa-trash ml-2" onClick={handleDelete} />
      <i
        className="fa fa-edit ml-2"
        aria-hidden="true"
        onClick={() => setShowUpdateForm(true)}
      />
      {showUpdateForm && (
        <UpdateStudent
          showModal={showUpdateForm}
          setShowModal={setShowUpdateForm}
          student={student}
        />
      )}
    </>
  );
};

export default EmailSection;
