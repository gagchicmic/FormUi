import { useState } from "react";
import { signUpFields } from "../data.js";
import Form from "../Form";
const SignUpForm = (
  { getDataFromForm, userData, formData, setFormData },
  props
) => {
  const [data, setData] = useState(new Array(signUpFields.length).fill(""));
  const uData = userData;

  let email;
  let password;
  const handleSubmit = (fields) => {
    for (let key in uData) {
      console.log(key, "   ", fields);
      if (key === fields["2"]["value"]) {
        alert("already used email");
        return;
      }
    }
    let isValid = true;
    let message;
    for (let i = 0; i < fields.length; i++) {
      if (fields[i]["error"] !== "no") {
        isValid = false;
        message = fields[i]["error"];
        break;
      }
    }
    if (!isValid) {
      alert(message);
      return;
    }

    // getting the email and password from field
    signUpFields.forEach((field, idx) => {
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
    alert("succes submitted");
  };
  return (
    <>
      <Form
        handleSubmit={handleSubmit}
        setFormData={setFormData}
        data={data}
        setData={setData}
        fields={signUpFields}
        isSignUp={true}
        userData={userData}
        formData={formData}
      />
    </>
  );
};
export default SignUpForm;
