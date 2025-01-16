import { Link } from "react-router-dom";
import "./Nav.css";
import logo from "../../assets/logooo.png";
import preview from "../../assets/looking-up.jpg";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-content">
          <Link to="/" className="nav-logo">
            <img src={logo} alt="Logo" />
          </Link>

          <div className="nav-name-container">
            <span className="nav-name">Your Name</span>
            <div className="logo-preview">
              <img src={preview} alt="Logo Preview" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
