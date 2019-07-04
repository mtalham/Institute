import React from "react";
import { Modal } from "react-bootstrap";
import StudentForm from "./StudentForm";
import { useApollo } from "../StudentApollo";

const UpdateStudent = ({ showModal, setShowModal, student }) => {
  const { updateStudent } = useApollo();

  const handleOnSubmit = async values => {
    const variables = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      uuid: student.uuid
    };
    console.log(variables);
    await updateStudent({ variables });
    setShowModal(false);
  };

  return (
    <>
      <Modal size="sm" show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update Student Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <StudentForm initialValues={student} onSubmit={handleOnSubmit} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default UpdateStudent;
