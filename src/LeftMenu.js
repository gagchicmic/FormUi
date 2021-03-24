import React from "react";
import UserList from "./UserList";
import Usernavbar from "./Usernavbar";

function LeftMenu(props) {
  return (
    <div
      style={{
        background: "#fff",
        display: "grid",
        gridTemplateRows: "1fr 10fr",
      }}
    >
      <Usernavbar {...props} />
      <div style={{ backgroundColor: "#fff" }}>
        <UserList {...props} />
      </div>
    </div>
  );
}

export default LeftMenu;
