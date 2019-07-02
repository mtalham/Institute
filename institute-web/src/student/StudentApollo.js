import gql from "graphql-tag";

export const GET_STUDENTS = gql`
  query allStudents {
    allStudents {
      firstName
      lastName
      email
    }
  }
`;

export const CREATE_STUDENT = gql`
  mutation CreateStudent($first: String, $last: String, $email: String) {
    createStudent(first: $first, last: $last, email: $email) {
      firstName
      lastName
      email
    }
  }
`;