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
      {window.location.href.split("/")[3] === "login" ? (
        <LoginForm validateUser={validateUser} />
      ) : (
        <SignUpForm getDataFromForm={getDataFromForm} />
      )}
    </>
  );
}

export default App;
