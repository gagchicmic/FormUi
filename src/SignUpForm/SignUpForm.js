import { useState } from "react";
import { signUpFields } from "../data.js";
import Form from "../Form";
import Navbar from "../Navbar.js";
const SignUpForm = ({ getDataFromForm, userData }) => {
  const [data, setData] = useState(new Array(signUpFields.length).fill(""));
  let email;
  let password;
  const handleSubmit = (fields) => {
    console.log(fields);

    // getting the email and password from field
    signUpFields.map((field, idx) => {
      // updating field from onChange data
      field.value = data[idx];
      if (Object.values(field)[0] === "email") {
        email = field.value;
      }
      if (Object.values(field)[0] === "password") {
        password = field.value;
      }
    });
    // get user data to store in state
    const formData = {
      email: email,
      password: password,
    };
    // callback function to store data in state for checking authentication
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
        userData={userData}
      />
    </>
  );
};
export default SignUpForm;
