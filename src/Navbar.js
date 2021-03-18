import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <Link to="/login">Login</Link>
      <Link to="/signup">SignUp</Link>
    </>
  );
}
export default Navbar;
