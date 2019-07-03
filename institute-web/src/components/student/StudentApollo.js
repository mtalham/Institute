import gql from "graphql-tag";
import { useMemo } from "react";
import { useMutation } from "react-apollo-hooks";

export const GET_STUDENTS = gql`
  query allStudents {
    allStudents {
      firstName
      lastName
      email
      uuid
    }
  }
`;

export const CREATE_STUDENT = gql`
  mutation CreateStudent($first: String!, $last: String!, $email: String!) {
    createStudent(first: $first, last: $last, email: $email) {
      firstName
      lastName
      email
    }
  }
`;

export const DELETE_STUDENT = gql`
  mutation DeleteStudent($uuid: String!) {
    deleteStudent(uuid: $uuid)
  }
`;

export const useApollo = () => {
  const refetchQueries = useMemo(
    () => [
      {
        query: GET_STUDENTS
      }
    ],
    []
  );

  const createStudent = useMutation(CREATE_STUDENT, { refetchQueries });
  const deleteStudent = useMutation(DELETE_STUDENT, { refetchQueries });

  return {
    createStudent,
    deleteStudent
  };
};
