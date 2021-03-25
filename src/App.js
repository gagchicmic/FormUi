// import libs
import React, { useEffect, useState } from "react";
import LoginForm from "./LoginForm/LoginForm";
import Navbar from "./Navbar";
import SignUpForm from "./SignUpForm/SignUpForm";
import { useHistory } from "react-router-dom";
import Spinner from "./Spinner";
// localStorage.setItem("userArr", JSON.stringify([]));
// logic part
function App() {
  // store the data of signUp Users

  const history = useHistory();
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
  const [apiData, setApiData] = useState(false);
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

  useEffect(() => {
    fetchProducts();
  }, []);

  // validate the user is genuine or not
  const validateUser = (data) => {
    console.log(data);
    let isValid = false;
    var x = localStorage.getItem("userArr");
    let userArr = JSON.parse(x);
    if (userArr) {
      for (let i = 0; i < userArr.length; i++) {
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
    if (!isValid) {
      alert("wrong email or password");
    }
  };

  // Data from SignUp form to store in state
  const getDataFromForm = (data) => {
    let tempObj = { ...formData };
    tempObj[data["email"]] = data["password"];
    tempObj["friends"] = apiData;
    let tempArr = localStorage.getItem("userArr") || "[]";
    tempArr = JSON.parse(tempArr);
    tempArr.push(tempObj);
    setFormData({
      "First Name": { type: "text", error: "", value: "" },
      "Last Name": { type: "text", error: "", value: "" },
      Email: { type: "email", error: "", value: "" },
      Password: { type: "password", error: "", value: "" },
      DOB: { type: "date", error: "", value: "" },
      Contact: { type: "tel", error: "", value: "" },
    });

    localStorage.setItem("userArr", JSON.stringify(tempArr));
    var x = localStorage.getItem("userArr");
    let ARR = JSON.parse(x);
    console.log(ARR);
  };
  //   Signup or Login View depend upon the url
  return (
    <>
      {apiData ? (
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
