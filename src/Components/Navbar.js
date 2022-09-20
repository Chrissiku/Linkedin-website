import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import home from "../images/home.png";
import avatar from "../images/avatar.jpg";
import search from "../images/search.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <Link to="/" className="logo">
            <img src={logo} alt="Linkedin logo" />
          </Link>

          <div className="search-box">
            <img src={search} alt="Search here" />
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="navbar-center">
          <ul>
            <li>
              {" "}
              <Link to="/" className="active">
                <img src={home} alt="Home" />
                <span>Home</span>
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/">
                <img src={home} alt="My Network" />
                <span>My Network</span>
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/">
                <img src={home} alt="Jobs" />
                <span>Jobs</span>
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/">
                <img src={home} alt="Messages" />
                <span>Messages</span>
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/">
                <img src={home} alt="Notifications" />
                <span>Notifications</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-right">
          <div className="online-status">
            <img src={avatar} alt="Avatar" className="profile-img" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
