import React from "react";
import LeftMenu from "./LeftMenu.js";
import RightMenu from "./RightMenu.js";
function Dashboard(props) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "2.12fr 5fr",
        minHeight: "100vh",
      }}
    >
      <LeftMenu {...props} />
      <RightMenu {...props} />

      {/* <h1>Welcome {userData["currentUser"]["First Name"]["value"]} </h1> */}
    </div>
  );
}

export default Dashboard;
