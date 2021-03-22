import { useLocation } from "react-router-dom";
import Navbar from "./Navbar.js";

const Home = () => {
  const location = useLocation();
  const name = location.state.params;
  return (
    <>
      <Navbar isLoggedIn={true} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          paddingBottom: "200px",
        }}
      >
        <h1>Welcome {name}</h1>
      </div>
    </>
  );
};

export default Home;
