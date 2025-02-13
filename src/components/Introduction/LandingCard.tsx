import pfp from "../../assets/MyPicture.jpg";
import AboutMe from "./AboutMe";
import Title from "./Title";
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
          <Title />
          <TopButtons />
        </div>
        <AboutMe />
      </div>
  </>
  );
};

export default MainCard;
