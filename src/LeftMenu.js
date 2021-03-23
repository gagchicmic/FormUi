import React from "react";
import Usernavbar from "./Usernavbar";

function LeftMenu() {
  return (
    <div
      style={{
        background: "#fff",
        display: "grid",
        gridTemplateRows: "1fr 10fr",
      }}
    >
      <Usernavbar />
      <div style={{ backgroundColor: "#fff" }}></div>
    </div>
  );
}

export default LeftMenu;
