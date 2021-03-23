import React from "react";
import AvatarImg from "./img_avatar.png";
function UserList(props) {
  const imageList = props.friendList.map((friend) => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <img
          style={{ height: "50px", borderRadius: "20%" }}
          src={friend["image"]}
          alt=""
          srcset=""
        />
        <h1>{friend["name"]}</h1>
      </div>
    );
  });
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr", padding: "7%" }}>
      {imageList}
    </div>
  );
}

export default UserList;
