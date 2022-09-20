import { Link } from "react-router-dom";
import more from "../images/more.png";

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
      </div>
    </>
  );
};

export default RightSidebar;
