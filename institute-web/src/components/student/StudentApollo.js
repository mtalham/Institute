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
  mutation CreateStudent($firstName: String!, $lastName: String!, $email: String!) {
    createStudent(firstName: $firstName, lastName: $lastName, email: $email) {
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

export const UPDATE_STUDENT = gql`
  mutation UpdateStudent(
    $firstName: String!
    $lastName: String!
    $email: String!
    $uuid: String!
  ) {
    modifyStudent(firstName: $firstName, lastName: $lastName, email: $email, uuid: $uuid) {
      firstName
      lastName
      email
    }
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
  const updateStudent = useMutation(UPDATE_STUDENT, { refetchQueries });

  return {
    createStudent,
    deleteStudent,
    updateStudent
  };
};
