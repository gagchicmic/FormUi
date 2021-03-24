import React, { useState } from "react";
import "./modal.css";
import { v4 as uuidv4 } from "uuid";
import Modal from "./Modal";
function UserList(props) {
  const [isPopUp, setPopUp] = useState(false);
  const [imageIndex, setImageIndex] = useState(null);
  let idx;
  const handleClick = (index) => {
    setPopUp(true);
    setImageIndex(index);
  };
  let imageList = [];

  const fillData = (index) => {
    idx = index;
    if (props.localData && "friendsList" in props.localData[index]) {
      imageList = props.localData[index]["friendsList"].map((friend, idx) => {
        return (
          <>
            <div
              key={uuidv4}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "0 15px 0 13px",
                borderBottom: "1px solid #919191",
              }}
            >
              <img
                style={{
                  height: "50px",
                  width: "50px",

                  borderRadius: "50%",
                }}
                src={friend["image"]}
                onClick={() => handleClick(idx)}
                alt=""
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: "0.8rem",
                textAlign: "left",
                padding: "25px 15px",
                borderBottom: "1px solid #919191",
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
  };
  if (props.localData) {
    for (let i = 0; i < props.localData.length; i++) {
      if (
        props.localData[i]["Email"]["value"] ===
        props.userData["currentUser"]["Email"]["value"]
      ) {
        fillData(i);
      }
    }
  }

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 4fr",
        }}
      >
        {imageList}
      </div>
      {isPopUp && (
        <Modal>
          <div className="modal">
            <span
              style={{ background: "black", fontSize: "30px" }}
              className="cancel"
              onClick={() => setPopUp(false)}
            >
              close
            </span>
            <img
              style={{ height: "400px", width: "400px" }}
              src={props.localData[idx]["friendsList"][imageIndex]["image"]}
              alt=""
              srcset=""
            />
          </div>
        </Modal>
      )}
    </>
  );
}
export default UserList;
