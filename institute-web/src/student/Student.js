import React from "react";
import { graphql } from "react-apollo";
import { GET_STUDENTS } from "./StudentApollo";

import "bootstrap/dist/css/bootstrap.min.css";
const Student = ({ data: { allStudents, loading } }) => {
  if (loading) return "Loading...";
  if (allStudents == null) return null;

  return (
    <div>
      <table className="table table-bordered table-hover table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {allStudents.map((student, i) => (
            <tr>
              <th scope="row">{i + 1}</th>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const withApollo = graphql(GET_STUDENTS);

export default withApollo(Student);
