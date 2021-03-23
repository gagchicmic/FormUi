import { useState } from "react";
import { useLocation } from "react-router-dom";
import Dashboard from "./Dashboard.js";
import Navbar from "./Navbar.js";

const Home = () => {
  const location = useLocation();
  const userData = location.state?.params || false;
  const [userContact, setUserContact] = useState({
    name: "",
    image: "",
  });
  const [friendList, setFriendList] = useState([]);
  const handleSubmit = () => {
    const tempArr = friendList.length === 0 ? [] : [...friendList];
    console.log(userContact);
    tempArr.push(userContact);
    setFriendList(tempArr);
    console.log(tempArr);
    setUserContact({
      name: "",
      image: "",
    });
  };
  return !userData ? (
    <h1> "Error page"</h1>
  ) : (
    <>
      {/* <Navbar isLoggedIn={true} /> */}
      {/* <h1>{userData["currentUser"]["First Name"]["value"]}</h1> */}
      <Dashboard
        friendList={friendList}
        userContact={userContact}
        setFriendList={setFriendList}
        setUserContact={setUserContact}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default Home;
