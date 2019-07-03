import React from "react";
import EmailSection from "./EmailSection";

const StudentItem = ({ student, index }) => {
  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{student.firstName}</td>
      <td>{student.lastName}</td>
      <td>
        <EmailSection student={student} />
      </td>
    </tr>
  );
};

export default StudentItem;
