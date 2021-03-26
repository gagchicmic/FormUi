import React from "react";
import { GrEmoji as Emoji } from "react-icons/gr";
import { BiMicrophone as MicroPhone } from "react-icons/bi";

function RightBottom(props) {
  return props.isInput ? (
    <div
      style={{
        background: `${props.color}`,
        display: "flex",
        alignItems: "center",
        padding: "5px 35px",
      }}
    >
      <div
        style={{
          flexBasis: "5%",
          display: "flex",
        }}
      >
        <Emoji />
      </div>

      <div style={{ flexBasis: "90%" }}>
        <input
          type="text"
          style={{
            marginRight: "10px",
            width: "100%",
            padding: "6px",
            borderRadius: "20px",
            background: "#fff",
            border: "none",
          }}
        />
      </div>
      <div
        style={{
          flexBasis: "5%",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <MicroPhone />
      </div>
    </div>
  ) : (
    <div
      style={{
        background: `${props.color}`,
      }}
    ></div>
  );
}

export default RightBottom;
