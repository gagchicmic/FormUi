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
    if (props.localData && "friends" in props.localData[index]) {
      imageList = props.localData[index]["friends"].map((friend, idx) => {
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
              onClick={() =>
                props.handleListClick(friend["name"], friend["image"])
              }
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: "0.8rem",
                textAlign: "left",
                padding: "25px 10px",
                borderBottom: "1px solid #919191",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <span
                  style={{
                    margin: 0,
                    letterSpacing: "1px",
                    fontSize: "1rem",
                    textOverflow: "ellipsis",
                    flexGrow: "1",
                    fontWeight: "normal",
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
            <span className="cancel" onClick={() => setPopUp(false)}>
              Close
            </span>
            <div
              style={{
                backgroundColor: "snow",
                padding: "4%",
                borderRadius: "20px",
                position: "relative",
              }}
            >
              <div style={{ height: "200px", textAlign: "center" }}>
                <h4>{props.localData[idx]["friends"][imageIndex]["name"]}</h4>
                <img
                  style={{
                    height: "100%",
                    objectFit: "contain",
                    borderRadius: "20px",
                    marginTop: "10px",
                  }}
                  src={props.localData[idx]["friends"][imageIndex]["image"]}
                  alt=""
                  srcset=""
                />
              </div>
            </div>
            {/* <span
              style={{ background: "black", fontSize: "30px" }}
              className="cancel"
              onClick={() => setPopUp(false)}
            >
              close
            </span> */}
          </div>
        </Modal>
      )}
    </>
  );
}
export default UserList;
