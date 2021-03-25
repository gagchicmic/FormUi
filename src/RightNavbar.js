import React from "react";
import AvatarImg from "./img_avatar.png";
function RightNavbar(props) {
  return (
    <div
      style={{
        background: `${props.color}`,
        display: "flex",
        alignItems: "center",
        padding: "10px",
      }}
    >
      {props.image ? (
        <img
          alt=""
          style={{
            height: "42px",
            width: "42px",

            borderRadius: "50%",
          }}
          src={props.image}
        />
      ) : (
        <img
          alt=""
          style={{
            height: "42px",
            width: "42px",
            visibility: "hidden",
          }}
        />
      )}

      <span style={{ display: "inline-block", marginLeft: "10px" }}>
        {props.name}
      </span>
    </div>
  );
}

export default RightNavbar;
