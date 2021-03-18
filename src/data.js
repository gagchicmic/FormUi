const loginFields = [
  { name: "email", type: "email", value: "" },
  { name: "password", type: "password", value: "" },
];
const signUpFields = [
  { name: "first name", type: "text", value: "", isvalid: true },
  { name: "last name", type: "text", value: "", isvalid: true },
  { name: "email", type: "email", value: "", isvalid: null },
  { name: "password", type: "password", value: "", isvalid: null },
  { name: "DOB", type: "date", value: "", isvalid: null },
  { name: "contact", type: "tel", value: "", isvalid: null },
];
export { loginFields, signUpFields };
