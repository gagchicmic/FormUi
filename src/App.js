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
    <>
      <Navbar />

      <div
        style={{
          background: "#0F2027" /* fallback for old browsers */,
          background:
            "-webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027)" /* Chrome 10-25, Safari 5.1-6 */,
          background:
            "linear-gradient(to right, #2C5364, #203A43, #0F2027)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "#e0fbfc",
        }}
      >
        {window.location.href === "http://localhost:3000/login" ? (
          <div style={{ marginTop: "-200px" }}>
            <div style={{}}>
              <h1>Welcome Back</h1>
              <h5>To keep connect please login with us </h5>
              <h1>Sign In</h1>
            </div>
            <div style={{ paddingRight: "9%" }}>
              <LoginForm className="login" validateUser={validateUser} />
            </div>
          </div>
        ) : (
          <div>
            <h1 style={{ marginTop: "-10%" }}>Sign Up</h1>
            <SignUpForm userData={userData} getDataFromForm={getDataFromForm} />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
