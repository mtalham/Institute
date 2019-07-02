import React, { useState } from "react";
import { CREATE_STUDENT } from "./StudentApollo";
import { useMutation } from "react-apollo-hooks";

const AddStudent = ({ history }) => {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");

  const createStudent = useMutation(CREATE_STUDENT);

  const handleSubmit = async e => {
    e.preventDefault();
    const variables = {
      first,
      last,
      email
    };
    await createStudent({ variables });
    history.push("/students");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            name="first"
            type="text"
            placeholder="First Name"
            onChange={e => setFirst(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            name="last"
            type="text"
            placeholder="Last Name"
            onChange={e => setLast(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block mt-4">
          {" "}
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddStudent;
