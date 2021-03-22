import Form from "../Form";

const LoginForm = ({ validateUser, formData, setFormData, userData }) => {
  // when user try to login
  const handleSubmit = () => {
    // callback to validate user to check for authentication
    validateUser(formData);
  };

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
