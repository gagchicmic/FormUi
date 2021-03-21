import { signUpFields } from "../data.js";
import Form from "../Form";
const SignUpForm = (
  { getDataFromForm, userData, formData, setFormData },
  props
) => {
  const handleSubmit = () => {
    let isValid = true;
    let message;
    const keyArr = Object.keys(formData);
    for (let i = 0; i < keyArr.length; i++) {
      if (formData[keyArr[i]]["error"].length > 0) {
        isValid = false;
        message = formData[keyArr[i]]["error"];
        break;
      }
    }
    if (!isValid) {
      alert(message);
      return;
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
