import React from "react";
import Avatars from "./Avatars";
import Avatar from "./img_avatar.png";
import { Link } from "react-router-dom";

function Usernavbar(props) {
  return (
    <>
      <div className="leftNav">
        <div className="imgDiv">
          <img alt="" src={Avatar} />
          <span>
            {props.userData["currentUser"] &&
              props.userData["currentUser"]["First Name"]["value"]}
          </span>
        </div>
        <div className="iconsDiv">
          <Link className="Link" to="/login">
            Sign out
          </Link>

          <Avatars {...props} />
        </div>
      </div>
    </>
  );
}

export default Usernavbar;
