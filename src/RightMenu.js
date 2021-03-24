import React from "react";
import BottomRightMenu from "./BottomRightMenu";
import RightNavbar from "./RightNavbar";
const Background =
  "https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png";
function RightMenu(props) {
  return (
    <div
      style={{
        backgroundImage: `url(${Background})`,
        maxHeight: "100vh",
      }}
    >
      <div
        style={{
          display: "grid",
        }}
      >
        <RightNavbar {...props} />
        {/* <BottomRightMenu /> */}
      </div>
    </div>
  );
}

export default RightMenu;
