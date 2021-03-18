import { useState } from "react";
import { signUpFields } from "../data.js";
import Form from "../Form";
import Navbar from "../Navbar.js";
const SignUpForm = ({ getDataFromForm }) => {
  const [data, setData] = useState(new Array(signUpFields.length).fill(""));
  let email;
  let password;
  const handleSubmit = () => {
    signUpFields.map((field, idx) => {
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
    getDataFromForm(formData);
  };
  return (
    <>
      <Form
        handleSubmit={handleSubmit}
        data={data}
        setData={setData}
        fields={signUpFields}
        isSignUp={true}
      />
      ;
    </>
  );
};
export default SignUpForm;
