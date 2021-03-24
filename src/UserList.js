import React from "react";
import AvatarImg from "./img_avatar.png";
function UserList(props) {
  let localData = JSON.parse(localStorage.getItem("userArr"));
  let index;
  if (localData) {
    for (let i = 0; i < localData.length; i++) {
      if (
        localData[i]["Email"]["value"] ===
        props.userData["currentUser"]["Email"]["value"]
      ) {
        index = i;
      }
    }
  }
  console.log(localData);
  let imageList = [];
  if (localData && "friendsList" in localData[index]) {
    imageList = localData[index]["friendsList"].map((friend, idx) => {
      return (
        <>
          <div
            key={idx}
            style={{
              display: "flex",
              alignItems: "center",
              padding: "0 15px 0 13px",
              margin: "20px 0",
            }}
          >
            <img
              style={{
                height: "50px",
                width: "50px",

                borderRadius: "50%",
              }}
              src={friend["image"]}
              alt=""
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "0.8rem",
              textAlign: "left",
              padding: "20px 15px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <span
                style={{
                  margin: 0,
                  letterSpacing: "1px",
                  fontSize: "1.4rem",
                  textOverflow: "ellipsis",
                  flexGrow: "1",
                }}
              >
                {friend["name"]}
              </span>
              <span style={{ color: "rgb(0 0 0 / 45%)" }}>12:00 A.M</span>
            </div>
          </div>
        </>
      );
    });
  }

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 4fr" }}>
      {imageList}
    </div>
  );
}
export default UserList;
