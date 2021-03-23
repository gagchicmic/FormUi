import { useLocation } from "react-router-dom";
import Dashboard from "./Dashboard.js";
import Navbar from "./Navbar.js";

const Home = () => {
  const location = useLocation();
  const userData = location.state?.params || false;
  console.log(userData);
  return !userData ? (
    <h1> "Error page"</h1>
  ) : (
    <>
      {/* <Navbar isLoggedIn={true} /> */}
      <h1>{userData["currentUser"]["First Name"]["value"]}</h1>
      <Dashboard />
    </>
  );
};

export default Home;
