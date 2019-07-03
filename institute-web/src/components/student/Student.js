import React from "react";
import { graphql } from "react-apollo";
import { GET_STUDENTS } from "./StudentApollo";
import StudentItem from "./StudentItem";

import "bootstrap/dist/css/bootstrap.min.css";

const StudentHead = () => (
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
);

const Student = ({ data: { allStudents, loading } }) => {
  if (loading) return "Loading...";
  if (allStudents == null) return null;

  return (
    <div>
      <table className="table table-bordered table-hover table-dark">
        <StudentHead />
        <tbody>
          {allStudents.map((student, i) => (
            <StudentItem student={student} index={i} key={student.uuid} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const withApollo = graphql(GET_STUDENTS);

export default withApollo(Student);
