import { useState } from "react";
import Form from "../Form";

const LoginForm = ({ validateUser, formData, setFormData, userData }) => {
  let email;
  let password;

  // when user try to login
  const handleSubmit = () => {
    console.log(userData);
  };

  // // callback to validate user to check for authentication
  // validateUser(formData);

  return (
    <>
      <Form
        handleSubmit={handleSubmit}
        formData={formData}
        setFormData={setFormData}
      />
    </>
  );
};
export default LoginForm;
