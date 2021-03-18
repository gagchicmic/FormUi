// import libs
import React, { useState } from "react";
import LoginForm from "./LoginForm/LoginForm";
import Navbar from "./Navbar";
import SignUpForm from "./SignUpForm/SignUpForm";

// logic part
function App() {
  // store the data of signUp Users
  const [userData, setUserData] = useState({});
  // validate the user is genuine or not
  const validateUser = (data) => {
    console.log(data["password"]);
    console.log(userData[data["email"]]);

    if (userData[data["email"]] === data["password"]) {
      alert(true);
    }
  };

  // Data from SignUp form to store in state
  const getDataFromForm = (data) => {
    const tempObj = { ...userData };
    tempObj[data["email"]] = data["password"];
    setUserData(tempObj);
  };
  //   Signup or Login View depend upon the url
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#F7EDE2",
      }}
    >
      <div
        style={{
          padding: "12%",
          display: "grid",
          gridTemplateColumns: "4fr 5fr",
          textAlign: "center",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            background: " #4CB8C4" /* fallback for old browsers */,
            background:
              " -webkit-linear-gradient(to right, #3CD3AD, #4CB8C4)" /* Chrome 10-25, Safari 5.1-6 */,
            background:
              " linear-gradient(to right, #3CD3AD, #4CB8C4)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
            height: "60vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            borderTopLeftRadius: "20px",
            borderBottomLeftRadius: "20px",
          }}
        >
          <div style={{ marginBottom: "30px" }}>
            <h1>Welcome Back</h1>
            <h5>To keep connect please login with us </h5>
            <h1>Sign In</h1>
          </div>

          <LoginForm className="login" validateUser={validateUser} />
        </div>
        <div
          style={{
            background: "#C9D6FF" /* fallback for old browsers */,
            background:
              "-webkit-linear-gradient(to right, #E2E2E2, #C9D6FF)" /* Chrome 10-25, Safari 5.1-6 */,
            background:
              "linear-gradient(to right, #E2E2E2, #C9D6FF)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
            height: "60vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            borderTopRightRadius: "20px",
            borderBottomRightRadius: "20px",
          }}
        >
          <h1>Sign Up</h1>
          <SignUpForm getDataFromForm={getDataFromForm} />
        </div>
      </div>
    </div>
  );
}

export default App;
