import React from "react";
import AvatarImg from "./img_avatar.png";
function RightNavbar(props) {
  return (
    <div
      style={{
        background: "rgb(237 237 237)",
        display: "grid",
        gridTemplateColumns: "1fr 12fr 1fr",
        alignItems: "center",
        paddingLeft: "6%",
        padding: "1.1%",
      }}
    >
      <img
        alt=""
        style={{ maxWidth: "40px", borderRadius: "50%" }}
        src={AvatarImg}
      />
      <span>name</span>
    </div>
  );
}

export default RightNavbar;
