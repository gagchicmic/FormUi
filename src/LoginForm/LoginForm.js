import { useState } from "react";
import { loginFields } from "../data.js";
import Form from "../Form";
import Navbar from "../Navbar.js";
const LoginForm = ({ validateUser }) => {
  const [data, setData] = useState(new Array(loginFields.length).fill(""));
  let email;
  let password;
  const handleSubmit = () => {
    loginFields.map((field, idx) => {
      field.value = data[idx];
      if (Object.values(field)[0] === "email") {
        email = field.value;
      }
      if (Object.values(field)[0] === "password") {
        password = field.value;
      }
    });
    const formData = {
      email: email,
      password: password,
    };
    validateUser(formData);
  };
  return (
    <>
      <Form
        handleSubmit={handleSubmit}
        data={data}
        setData={setData}
        fields={loginFields}
      />
      ;
    </>
  );
};
export default LoginForm;
