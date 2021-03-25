import React from "react";
import BottomRightMenu from "./BottomRightMenu";
import RightNavbar from "./RightNavbar";
import RightBottom from "./RightBottom";
import WhatsApp from "./whatsApp.png";
const Background =
  "https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png";
function RightMenu(props) {
  return props.name ? (
    <div
      style={{
        backgroundImage: `url(${Background})`,
        display: "grid",
        gridTemplateRows: "1fr 8.3fr 1fr",
        maxHeight: "100vh",
      }}
    >
      {props.name ? (
        <RightNavbar {...props} color="rgb(237 237 237)" />
      ) : (
        <RightNavbar name="" image="" color="rgb(237 237 237)" />
      )}
      <div style={{ background: "transparent" }}></div>

      {props.name ? (
        <RightBottom isInput color="rgb(237 237 237)" />
      ) : (
        <RightBottom />
      )}
    </div>
  ) : (
    <div
      style={{
        backgroundImage: `url(${WhatsApp})`,
        borderLeft: "solid 3px rgb(237 237 237)",
      }}
    ></div>
  );
}

export default RightMenu;
