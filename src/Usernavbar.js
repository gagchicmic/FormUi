import React from "react";
import Avatars from "./Avatars";
import Avatar from "./img_avatar.png";

function Usernavbar(props) {
  return (
    <>
      <div
        style={{
          backgroundColor: "#ededed",
          display: "flex",
          padding: "10px 16px",
        }}
      >
        <div
          style={{
            flexBasis: "20%",
            backgroundColor: "#ededed",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            alt=""
            style={{ maxWidth: "40px", borderRadius: "50%" }}
            src={Avatar}
          />
        </div>
        <div
          style={{
            flexBasis: "80%",
            display: "flex",
            flexDirection: "row-reverse",
            alignItems: "center",
          }}
        >
          <Avatars {...props} />
        </div>
      </div>
    </>
  );
}

export default Usernavbar;
