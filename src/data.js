const loginFields = [
  { name: "email", type: "email", value: "" },
  { name: "password", type: "password", value: "" },
];
const signUpFields = [
  { name: "first name", type: "text", value: "", isvalid: null, error: "" },
  { name: "last name", type: "text", value: "", isvalid: null, error: "" },
  { name: "email", type: "email", value: "", isvalid: null, error: "" },
  { name: "password", type: "password", value: "", isvalid: null, error: "" },
  { name: "DOB", type: "date", value: "", isvalid: null, error: "" },
  { name: "contact", type: "tel", value: "", isvalid: null, error: "" },
];
export { loginFields, signUpFields };
