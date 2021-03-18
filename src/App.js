import React, { useState } from "react";
import LoginForm from "./LoginForm/LoginForm";
import Navbar from "./Navbar";
import SignUpForm from "./SignUpForm/SignUpForm";

function App() {
  const [userData, setUserData] = useState({});
  const validateUser = (data) => {
    console.log(data["password"]);
    console.log(userData[data["email"]]);

    if (userData[data["email"]] === data["password"]) {
      alert(true);
    }
  };
  const getDataFromForm = (data) => {
    const tempObj = { ...userData };
    tempObj[data["email"]] = data["password"];
    setUserData(tempObj);
  };
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
