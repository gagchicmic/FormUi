import React from "react";
import { Link } from "react-router-dom";
function Navbar({ isLoggedIn }) {
  return (
    <>
      {isLoggedIn ? (
        <div
          style={{
            alignItems: "center",
            height: "6vh",
            backgroundColor: "rgb(229, 107, 111)",
            display: "flex",
            flexDirection: "row-reverse",
          }}
        >
          <Link
            style={{
              marginRight: "40px",
              color: "#fcd5ce",
              textDecoration: "none",
            }}
            to="/"
          >
            Sign Out
          </Link>
        </div>
      ) : (
        <div
          style={{
            alignItems: "center",
            height: "6vh",
            backgroundColor: "rgb(229, 107, 111)",
            backdropFilter: "blur(10px)",
            display: "flex",
            flexDirection: "row-reverse",
          }}
        >
          <Link
            style={{
              marginRight: "40px",
              color: "#fcd5ce",
              textDecoration: "none",
            }}
            to="/login"
          >
            Login
          </Link>
          <Link
            style={{
              marginRight: "40px",
              color: "#fcd5ce",
              textDecoration: "none",
            }}
            to="/signup"
          >
            Signup
          </Link>
        </div>
      )}
    </>
  );
}
export default Navbar;
