import { signUpFields } from "../data.js";
import Form from "../Form";
const SignUpForm = (
  { getDataFromForm, userData, formData, setFormData },
  props
) => {
  const handleSubmit = () => {
    let userData = localStorage.getItem("userArr");
    userData = JSON.parse(userData);
    if (userData && userData.length) {
      // prevent registering from duplicate email
      for (let i = 0; i < userData.length; i++) {
        if (userData[i][formData["Email"]["value"]]) {
          alert("already exist");
          return;
        }
      }
    }
    let isValid = true;
    // error message on submit
    let message;
    const keyArr = Object.keys(formData);
    for (let i = 0; i < keyArr.length; i++) {
      console.log(formData[keyArr[i]]);
      // if there is error or the input is empty prevent
      if (
        formData[keyArr[i]]["error"].length > 0 ||
        !formData[keyArr[i]]["value"].length
      ) {
        isValid = false;
        message = (keyArr[i] + " error").toUpperCase();
        break;
      }
    }
    if (!isValid) {
      alert(message);
      return;
    } else {
      alert("SuccesFully Account Created");
    }
    // send email and data to app.js
    const {
      Password: { value: password },
      Email: { value: email },
    } = formData;
    const dataObj = { password, email };

    getDataFromForm(dataObj);
  };
  return (
    <>
      <Form
        handleSubmit={handleSubmit}
        setFormData={setFormData}
        fields={signUpFields}
        isSignUp={true}
        userData={userData}
        formData={formData}
      />
    </>
  );
};
export default SignUpForm;
