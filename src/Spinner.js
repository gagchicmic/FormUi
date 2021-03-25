import React from "react";

function Spinner() {
  return (
    <div
      style={{
        width: "100wh",
        height: "100vh",
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ color: "white" }}>Loading .....</h1>
    </div>
  );
}

export default Spinner;
