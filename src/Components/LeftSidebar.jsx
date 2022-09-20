import { Link } from "react-router-dom";
import cover from "../images/cover.jpg";
import avatar from "../images/avatar.jpg";
import item from "../images/items.png";
import recent from "../images/recent.png";

const LeftSidebar = () => {
  return (
    <>
      <div className="left-sidebar">
        <div className="sidebar-profile-box">
          <img src={cover} alt="cover" className="cover-image" />
          <div className="sidebar-profile-info">
            <img src={avatar} alt="avatar" />
            <h1>Christian Siku</h1>
            <h3>Software developer at Microverse</h3>
            <ul>
              <li>
                Who's viewed your profile<span>84</span>
              </li>
              <li>
                Impression of your posts<span>620</span>
              </li>
              <li>
                Your connections<span>830</span>
              </li>
            </ul>
          </div>
          <div className="sidebar-profile-link">
            <Link to="/">
              <img src={item} alt="item link" />
              My Items
            </Link>
            <Link to="/">
              <img src={item} alt="item link" />
              Try premium
            </Link>
          </div>
        </div>
        <div className="sidebar-activity">
          <h3>Recent</h3>
          <Link to="/"><img src={recent} alt="Recent activities"/>Web developement</Link>
          <Link to="/"><img src={recent} alt="Recent activities"/>Web developement</Link>
          <Link to="/"><img src={recent} alt="Recent activities"/>Web developement</Link>
          <Link to="/"><img src={recent} alt="Recent activities"/>Web developement</Link>
          <Link to="/"><img src={recent} alt="Recent activities"/>Web developement</Link>
          
          <h3>Groups</h3>
          <Link to="/"><img src={recent} alt="Recent activities"/>Web developement</Link>
          <Link to="/"><img src={recent} alt="Recent activities"/>Web developement</Link>
          <Link to="/"><img src={recent} alt="Recent activities"/>Web developement</Link>
          <Link to="/"><img src={recent} alt="Recent activities"/>Web developement</Link>
          <Link to="/"><img src={recent} alt="Recent activities"/>Web developement</Link>

          <h3>Followed Hashtags</h3>
          <Link to="/"><img src={recent} alt="Recent activities"/>Web developement</Link>
          <Link to="/"><img src={recent} alt="Recent activities"/>Web developement</Link>
          <Link to="/"><img src={recent} alt="Recent activities"/>Web developement</Link>
          <Link to="/"><img src={recent} alt="Recent activities"/>Web developement</Link>
          <Link to="/"><img src={recent} alt="Recent activities"/>Web developement</Link>
          <div className="discover">
            <Link to="/">Discover more</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftSidebar;
