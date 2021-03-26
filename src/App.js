// import libs
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import LoginForm from "./LoginForm/LoginForm";
import SignUpForm from "./SignUpForm/SignUpForm";
import { useHistory } from "react-router-dom";
import Spinner from "./Spinner";
import "./App.css";
function App() {
  // react router api for changing url
  const history = useHistory();
  // user Data for SignUP
  const [formData, setFormData] = useState({
    "First Name": { type: "text", error: "", value: "" },
    "Last Name": { type: "text", error: "", value: "" },
    Email: { type: "email", error: "", value: "" },
    Password: { type: "password", error: "", value: "" },
    DOB: { type: "date", error: "", value: "" },
    Contact: { type: "tel", error: "", value: "" },
  });

  // user data for login
  const [loginData, setLoginData] = useState({
    Email: { type: "email", error: "", value: "" },
    Password: { type: "password", error: "", value: "" },
  });

  // api data
  const [apiData, setApiData] = useState(false);

  // validate the user is genuine or not
  const validateUser = (data) => {
    let isValid = false;
    // get data from local storage
    let userArr = JSON.parse(localStorage.getItem("userArr"));
    if (userArr) {
      // find the user is valid
      for (let i = 0; i < userArr.length; i++) {
        // user is valid
        if (userArr[i][data["Email"]["value"]] === data["Password"]["value"]) {
          console.log(userArr[i]);
          history.replace("/welcome", {
            params: { currentUser: userArr[i] },
          });
          isValid = true;
          return;
        }
      }
    }
    // if wrong id password
    if (!isValid) {
      alert("wrong email or password");
    }
  };

  // Data from SignUp form to store in state
  const getDataFromForm = (data) => {
    let tempObj = { ...formData };
    // create mapping between user email and password
    tempObj[data["email"]] = data["password"];
    // load intial friends list
    tempObj["friends"] = apiData;
    // set the local storage with updated data
    let tempArr = localStorage.getItem("userArr") || "[]";
    tempArr = JSON.parse(tempArr);
    tempArr.push(tempObj);
    localStorage.setItem("userArr", JSON.stringify(tempArr));
    // reset the sign up form
    setFormData({
      "First Name": { type: "text", error: "", value: "" },
      "Last Name": { type: "text", error: "", value: "" },
      Email: { type: "email", error: "", value: "" },
      Password: { type: "password", error: "", value: "" },
      DOB: { type: "date", error: "", value: "" },
      Contact: { type: "tel", error: "", value: "" },
    });
  };
  // function to call api
  const fetchProducts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const userData = await res.json();
    const names = userData.map((user) => {
      return {
        name: user.name,
        image:
          "https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg",
      };
    });
    setTimeout(() => {
      setApiData(names);
    }, 400);
  };

  // get the data from api
  useEffect(() => {
    fetchProducts();
  }, []);

  //   Signup or Login View depend upon the url
  return (
    <>
      {apiData ? (
        <>
          <Navbar />
          <div className="mainDiv" style={{}}>
            <div className="formContainer">
              {window.location.href === "http://localhost:3000/login" ? (
                <div className="loginContainer-Main">
                  <h1>Sign In</h1>
                  <div className="loginContainer">
                    <LoginForm
                      formData={loginData}
                      setFormData={setLoginData}
                      className="login"
                      validateUser={validateUser}
                    />
                  </div>
                </div>
              ) : (
                <div className="signUpContainer-Main">
                  <h1>Sign Up</h1>
                  <div className="signUpContainer">
                    <SignUpForm
                      formData={formData}
                      setFormData={setFormData}
                      getDataFromForm={getDataFromForm}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
}

export default App;
