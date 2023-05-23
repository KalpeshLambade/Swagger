import "./CSS/style.css";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  // const [data, setData] = useState();

  const route = useNavigate();

  return (
    <>
      <div id="homepage">
        <div>
          <h1>Welcome To User Database Sysytem</h1>
          <div className="home-logo">
            <img
              src="https://img.freepik.com/free-vector/add-user-concept-illustration_114360-557.jpg?w=740&t=st=1684864832~exp=1684865432~hmac=4e92bc3daa260db08778242b92e1215db30389b5cbe990c51ac13f3c5c66a237"
              alt="logo"
              className="adj-img"
            />
          </div>
          <div className="home-btn">
            <button onClick={() => route(`/log`)}>Login</button>
            <button onClick={() => route("/reg")}>Register</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
