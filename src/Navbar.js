import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div
        style={{
          alignItems: "center",
          height: "6vh",
          backgroundColor: "#FFAFBD",
          display: "flex",
          flexDirection: "row-reverse",
        }}
      >
        <Link
          style={{
            marginRight: "40px",
            color: "#4a4e69",
            textDecoration: "none",
          }}
          to="/login"
        >
          Login
        </Link>
        <Link
          style={{
            marginRight: "40px",
            color: "#4a4e69",
            textDecoration: "none",
          }}
          to="/signup"
        >
          Signup
        </Link>
      </div>
    </>
  );
}
export default Navbar;
