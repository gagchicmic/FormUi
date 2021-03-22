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

    if (userData[data["Email"]["value"]] === data["Password"]["value"]) {
      alert(true);
    } else {
      alert("wrong email or password");
    }
  };

  // Data from SignUp form to store in state
  const getDataFromForm = (data) => {
    const tempObj = { ...userData };
    console.log(tempObj);
    tempObj[data["email"]] = data["password"];
    setUserData(tempObj);
    history.replace("/welcome", { params: formData["First Name"]["value"] });
    console.log("cehckkk");
    // setFormData({
    //   "First Name": { type: "text", error: "", value: "" },
    //   "Last Name": { type: "text", error: "", value: "" },
    //   Email: { type: "email", error: "", value: "" },
    //   Password: { type: "password", error: "", value: "" },
    //   DOB: { type: "date", error: "", value: "" },
    //   Contact: { type: "tel", error: "", value: "" },
    // });
  };
  //   Signup or Login View depend upon the url
  return (
    <>
      <Navbar />

      <div
        style={{
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
          <div>
            <h1 style={{ marginTop: "-10%" }}>Sign Up</h1>
            <SignUpForm
              formData={formData}
              setFormData={setFormData}
              userData={userData}
              getDataFromForm={getDataFromForm}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
