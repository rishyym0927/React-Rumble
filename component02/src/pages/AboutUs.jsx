import { useNavigate } from "react-router-dom";
import "../styles/Page.css";



function AboutUs() {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <h1>About Us</h1>
      <p>We are committed to delivering the best experience possible!</p>
      <button onClick={() => navigate("/")}>Go Back</button>
    </div>
  );
}

export default AboutUs;
