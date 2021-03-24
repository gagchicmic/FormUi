import React from "react";
import Avatars from "./Avatars";
import Avatar from "./img_avatar.png";
import { Link } from "react-router-dom";

function Usernavbar(props) {
  return (
    <>
      <div
        style={{
          backgroundColor: "#ededed",
          display: "flex",
          padding: "10px 16px",
          borderRight: "solid .3px #999",
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
            {props.userData["currentUser"] &&
              props.userData["currentUser"]["First Name"]["value"]}
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
          <Link
            style={{
              color: "rgb(0 0 0 / 45%)",
              fontWeight: "solid",
              textDecoration: "none",
            }}
            to="/login"
          >
            Sign out
          </Link>

          <Avatars {...props} />
        </div>
      </div>
    </>
  );
}

export default Usernavbar;
