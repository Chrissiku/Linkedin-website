import { Link } from "react-router-dom";
import more from "../images/more.png";
import avatar from "../images/avatar.jpg";
import mi_logo from "../images/mi-logo.png";
import logo from "../images/logo.png";

const RightSidebar = () => {
  return (
    <>
      <div className="right-sidebar">
        <div className="sidebar-news">
          <img src={more} alt="more info" className="info-icon" />
          <h3>Trending News</h3>
          <Link to="/">High demand for skilled developers</Link>
          <span>1d ago &middot; 10,999 readers</span>

          <Link to="/">High demand for skilled developers</Link>
          <span>1d ago &middot; 10,999 readers</span>

          <Link to="/">High demand for skilled developers</Link>
          <span>1d ago &middot; 10,999 readers</span>

          <Link to="/">High demand for skilled developers</Link>
          <span>1d ago &middot; 10,999 readers</span>

          <Link to="/" className="read-more">
            Read more
          </Link>
        </div>
        <div className="sidebar-ad">
          <span>Ad &middot;&middot;&middot;</span>
          <p>Become a full-stack development</p>
          <div>
            <img src={avatar} alt="User" />
            <img src={mi_logo} alt="User" />
          </div>
          <b>Brand and demand in Rwanda</b>
          <Link to="/" className="ad-link">
            Learn more
          </Link>
        </div>

        <div className="sidebar-useful-links">
          <Link to="/">About</Link>
          <Link to="/">Accessibility</Link>
          <Link to="/">Help Center</Link>
          <Link to="/">Privacy & Terms</Link>
          <Link to="/">Ad Choices Advertising</Link>
          <Link to="/">Business Services</Link>
          <Link to="/">Get the LinkedIn app</Link>
          <Link to="/">More</Link>

          <div className="copyright">
            <img src={logo} alt="logo" />
            <p>LinkedIn Corporation &#169; 2022</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightSidebar;
