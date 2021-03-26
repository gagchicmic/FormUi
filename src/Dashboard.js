import React, { useState } from "react";
import LeftMenu from "./LeftMenu.js";
import RightMenu from "./RightMenu.js";
import "./Dashboard.css";
function Dashboard(props) {
  const [name, setName] = useState("");
  const [Image, setImage] = useState("");

  const handleListClick = (name, image) => {
    setName(name);
    setImage(image);
  };
  return (
    <div className="mainDashboard">
      <LeftMenu {...props} handleListClick={handleListClick} />
      <RightMenu {...props} name={name} image={Image} />

      {/* <h1>Welcome {userData["currentUser"]["First Name"]["value"]} </h1> */}
    </div>
  );
}

export default Dashboard;
