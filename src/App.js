import Form from "./Form";
const App = () => {
  const loginFields = [
    { email: { type: "email" } },
    { passwords: { type: "password" } },
  ];
  return <Form field={loginFields} />;
};
export default App;
