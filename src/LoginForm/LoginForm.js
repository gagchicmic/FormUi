import { useState } from "react";
// get data of input types to use in form component
import { loginFields } from "../data.js";
import Form from "../Form";

const LoginForm = ({ validateUser }) => {
  // to store the onChange values in arr
  const [data, setData] = useState(new Array(loginFields.length).fill(""));

  // to send back to App.js from storing data
  let email;
  let password;

  // when user try to login
  const handleSubmit = () => {
    // iterate over object data of input fields
    loginFields.map((field, idx) => {
      // update the value of field from current value of event
      field.value = data[idx];

      // get the email and password values to check in App.js authentication
      if (Object.values(field)[0] === "email") {
        email = field.value;
      }
      if (Object.values(field)[0] === "password") {
        password = field.value;
      }
    });

    // create object of email and password data
    const formData = {
      email: email,
      password: password,
    };

    // callback to validate user to check for authentication
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
