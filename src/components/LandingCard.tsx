import pfp from "../assets/MyPicture.jpg";
import Introduction from "./introduction";
import Intro from "./intro";
import TopButtons from "./TopButtons";
const MainCard = () => {
  return (
  <>
      <div className="aspect-square h-20">
        <img
          src={pfp}
          alt=""
          className="size-20 border-gray-600 rounded-full aspect-square"
        />
      </div>
      <div className="mt-6 space-y-4">
        <div>
          <Intro />
          <TopButtons />
        </div>
        <Introduction />
      </div>
  </>
  );
};

export default MainCard;
