import React from "react";
import Avatars from "./Avatars";
import Avatar from "./img_avatar.png";
import { Link } from "react-router-dom";
import { AiOutlineCloseCircle as Close } from "react-icons/ai";

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
          <span
            style={{
              display: "inline-block",
              marginLeft: "10px",
              fontWeight: "bold",
            }}
          >
            {props.userData["currentUser"]["First Name"]["value"]}
          </span>
        </div>
        <div
          style={{
            flexBasis: "80%",
            display: "flex",
            flexDirection: "row-reverse",
            alignItems: "center",
          }}
        >
          <Link style={{}} to="/">
            <Close />
          </Link>

          <Avatars {...props} />
        </div>
      </div>
    </>
  );
}

export default Usernavbar;
