import LeftSidebar from "./LeftSidebar";
import MiddleContent from "./MiddleContent";
import RightSidebar from "./RightSidebar";

const Content = () => {
  return (
    <>
      <div className="container">
        <LeftSidebar />
        <MiddleContent />
        <RightSidebar />
      </div>
    </>
  );
};

export default Content;
