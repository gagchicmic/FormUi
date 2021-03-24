import { useState } from "react";
import { useLocation } from "react-router-dom";
import Dashboard from "./Dashboard.js";
import Navbar from "./Navbar.js";
import { useHistory } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const history = useHistory();
  const userData = location.state?.params || false;
  if (!userData) {
    history.replace("/");
  }

  const [userContact, setUserContact] = useState({
    name: "",
    image: "",
  });
  const [friendList, setFriendList] = useState([]);
  const handleSubmit = () => {
    let index;
    let localData = JSON.parse(localStorage.getItem("userArr"));
    console.log(localData);
    for (let i = 0; i < localData.length; i++) {
      if (
        localData[i]["Email"]["value"] ===
        userData["currentUser"]["Email"]["value"]
      ) {
        index = i;
      }
    }

    if ("friendsList" in localData[index]) {
      localData[index]["friendsList"].push(userContact);
    } else {
      localData[index]["friendsList"] = [userContact];
    }
    localStorage.setItem("userArr", JSON.stringify(localData));
    setUserContact({
      name: "",
      image: "",
    });
  };
  return (
    <>
      {/* <Navbar isLoggedIn={true} /> */}
      {/* <h1>{userData["currentUser"]["First Name"]["value"]}</h1> */}
      <Dashboard
        friendList={friendList}
        userContact={userContact}
        setFriendList={setFriendList}
        setUserContact={setUserContact}
        handleSubmit={handleSubmit}
        userData={userData}
      />
    </>
  );
};

export default Home;
