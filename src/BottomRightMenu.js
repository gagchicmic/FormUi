import React from "react";

function BottomRightMenu() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 5fr 1fr" }}>
      <div style={{ backgroundColor: "red" }}>1</div>
      <div style={{ backgroundColor: "blue" }}>2</div>
      <div style={{ backgroundColor: "gray" }}>3</div>
      <div style={{ backgroundColor: "black" }}>4</div>
    </div>
  );
}

export default BottomRightMenu;
