// import libs
import React, { useState } from "react";
import LoginForm from "./LoginForm/LoginForm";
import Navbar from "./Navbar";
import SignUpForm from "./SignUpForm/SignUpForm";
import { useHistory } from "react-router-dom";
// logic part
function App() {
  // store the data of signUp Users
  const history = useHistory();
  const [userData, setUserData] = useState({});
  const [formData, setFormData] = useState({
    "First Name": { type: "text", error: "", value: "" },
    "Last Name": { type: "text", error: "", value: "" },
    Email: { type: "email", error: "", value: "" },
    Password: { type: "password", error: "", value: "" },
    DOB: { type: "date", error: "", value: "" },
    Contact: { type: "tel", error: "", value: "" },
  });
  const [loginData, setLoginData] = useState({
    Email: { type: "email", error: "", value: "" },
    Password: { type: "password", error: "", value: "" },
  });
  // validate the user is genuine or not
  const validateUser = (data) => {
    // console.log(data, "    ", userData);
    // // console.log(userData[data["email"]]);
    var x = localStorage.getItem("userDataStore");
    console.log(x);
    if (userData[data["Email"]["value"]] === data["Password"]["value"]) {
      history.replace("/welcome", { params: userData["userName"] });
    } else {
      alert("wrong email or password");
    }
  };

  // Data from SignUp form to store in state
  const getDataFromForm = (data) => {
    const tempObj = { ...userData };
    tempObj[["email"]] = data["email"];
    tempObj[["password"]] = data["password"];

    tempObj["userName"] = formData["First Name"]["value"];
    setUserData(tempObj);
    setFormData({
      "First Name": { type: "text", error: "", value: "" },
      "Last Name": { type: "text", error: "", value: "" },
      Email: { type: "email", error: "", value: "" },
      Password: { type: "password", error: "", value: "" },
      DOB: { type: "date", error: "", value: "" },
      Contact: { type: "tel", error: "", value: "" },
    });

    localStorage.setItem("userObj", JSON.stringify(tempObj));
  };
  //   Signup or Login View depend upon the url
  return (
    <>
      <Navbar />
      <div
        style={{
          background: " #2C3E50" /* fallback for old browsers */,
          background:
            " -webkit-linear-gradient(to top, #FD746C, #2C3E50)" /* Chrome 10-25, Safari 5.1-6 */,
          background:
            " linear-gradient(to top, #FD746C, #2C3E50)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,

          height: "100vh",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            background: "rgba(0,0,0,0.2)",
            backdropFilter: "saturate(80%) blur(30px)",
            borderRadius: "20px",
            width: "70%",
            height: "75%",
            boxShadow: "box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;",
          }}
        >
          {window.location.href === "http://localhost:3000/login" ? (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                height: "40vh",
              }}
            >
              <h1
                style={{
                  flexBasis: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-end",
                  margin: "0",
                  color: "#e56b6f",
                  fontWeight: "bolder",
                }}
              >
                Sign In
              </h1>
              <div
                style={{
                  flexBasis: "100%",
                  display: "flex",
                  justifyContent: "center",
                  margin: "0",
                  alignItems: "center",
                }}
              >
                <LoginForm
                  formData={loginData}
                  setFormData={setLoginData}
                  userData={userData}
                  className="login"
                  validateUser={validateUser}
                />
              </div>
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                height: "60vh",
              }}
            >
              <h1
                style={{
                  flexBasis: "100%",
                  display: "flex",
                  justifyContent: "center",
                  margin: "0",
                  alignItems: "flex-end",
                  color: "#e56b6f",
                  fontWeight: "bolder",
                }}
              >
                Sign Up
              </h1>
              <div
                style={{
                  flexBasis: "100%",
                  display: "flex",
                  justifyContent: "center",
                  margin: "0",
                  alignItems: "center",
                }}
              >
                <SignUpForm
                  formData={formData}
                  setFormData={setFormData}
                  userData={userData}
                  getDataFromForm={getDataFromForm}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
