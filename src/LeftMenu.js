import React from "react";
import UserList from "./UserList";
import Usernavbar from "./Usernavbar";

function LeftMenu(props) {
  return (
    <div
      style={{
        background: "#fff",
        display: "grid",
        gridTemplateRows: "1fr 14fr",
        maxHeight: "100vh",
        boxShadow: "10px 0 5px -2px #888",
      }}
    >
      <Usernavbar {...props} />
      <div
        style={{
          backgroundColor: "#fff",
          overflowY: "auto",
        }}
      >
        <UserList {...props} />
      </div>
    </div>
  );
}

export default LeftMenu;
