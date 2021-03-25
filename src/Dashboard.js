import React, { useState } from "react";
import LeftMenu from "./LeftMenu.js";
import RightMenu from "./RightMenu.js";
function Dashboard(props) {
  const [name, setName] = useState("");
  const [Image, setImage] = useState("");
  const handleListClick = (name, image) => {
    setName(name);
    setImage(image);
  };
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "2.12fr 5fr",
        minHeight: "100vh",
      }}
    >
      <LeftMenu {...props} handleListClick={handleListClick} />
      <RightMenu {...props} name={name} image={Image} />

      {/* <h1>Welcome {userData["currentUser"]["First Name"]["value"]} </h1> */}
    </div>
  );
}

export default Dashboard;
