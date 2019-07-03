import React from "react";
import { useApollo } from "./StudentApollo";

const EmailSection = ({ student }) => {
  const { deleteStudent } = useApollo();

  const handleDelete = async () => {
    await deleteStudent({ variables: { uuid: student.uuid } });
  };

  return (
    <>
      {student.email}
      <i className="fa fa-trash ml-2" onClick={handleDelete} />
    </>
  );
};

export default EmailSection;
