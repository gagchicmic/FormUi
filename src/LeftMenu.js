import React from "react";
import UserList from "./UserList";
import Usernavbar from "./Usernavbar";

function LeftMenu(props) {
  return (
    <div className="leftMenu">
      <Usernavbar {...props} />
      <div className="listContainer">
        <UserList {...props} />
      </div>
    </div>
  );
}

export default LeftMenu;
