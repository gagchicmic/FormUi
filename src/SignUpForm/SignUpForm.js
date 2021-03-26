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
      for (let i = 0; i < userData.length; i++) {
        if (userData[i][formData["Email"]["value"]]) {
          alert("already exist");
          return;
        }
      }
    }
    let isValid = true;
    let message;
    const keyArr = Object.keys(formData);
    for (let i = 0; i < keyArr.length; i++) {
      console.log(formData[keyArr[i]]);
      if (
        formData[keyArr[i]]["error"].length > 0 ||
        !formData[keyArr[i]]["value"].length
      ) {
        isValid = false;
        message = `${(keyArr[i] + " " + "error").toUpperCase()}`;
        break;
      }
    }
    if (!isValid) {
      alert(message);
      return;
    } else {
      alert("SuccesFully Account Created");
    }
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
