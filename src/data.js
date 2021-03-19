const loginFields = [
  { name: "email", type: "email", value: "" },
  { name: "password", type: "password", value: "" },
];

const signUpFields = [
  { name: "first name", type: "text", value: "", isvalid: null, error: "no" },
  { name: "last name", type: "text", value: "", isvalid: null, error: "no" },
  { name: "email", type: "email", value: "", isvalid: null, error: "no" },
  { name: "password", type: "password", value: "", isvalid: null, error: "no" },
  { name: "DOB", type: "date", value: "", isvalid: null, error: "no" },
  { name: "contact", type: "tel", value: "", isvalid: null, error: "no" },
];
export { loginFields, signUpFields };
