import avatar from "../images/avatar.jpg";
import photo from "../images/photo.png";
import video from "../images/video.png";
import event from "../images/event.png";
const MiddleContent = () => {
  return (
    <>
      <div className="middle-content">
        <div className="create-post">
          <div className="create-post-input">
            <img src={avatar} alt="avatar" />
            <textarea rows={2} placeholder="Start a post"></textarea>
          </div>
          <div className="create-post-links">
            <ul>
              <li><img src={photo} alt="add pic" />Photo</li>
              <li><img src={video} alt="add video" />Video</li>
              <li><img src={event} alt="add event " />Event</li>
              <li>Post</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MiddleContent;
