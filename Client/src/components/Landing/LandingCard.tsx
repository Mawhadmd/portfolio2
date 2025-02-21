import { motion } from "motion/react";
import pfp from "../../assets/MyPicture.jpg";
import Blurfade from "../ui/Blurfade";
import AboutMe from "./AboutMe";
import Title from "./Title";
import TopButtons from "./TopButtons";
const MainCard = () => {
  return (
  <>
      <div  className="aspect-square h-20">
        <motion.img

          src={pfp}
          alt=""
          className="size-20 border-border rounded-full aspect-square"
        />
      </div>
      <div className="mt-6 space-y-4">
        <div>
        <Blurfade onlyBlur={true} delay={0.1} >
          <Title />
          </Blurfade >
          <TopButtons />
        </div>
        <Blurfade onlyBlur={true} delay={0.1} >
        <AboutMe />
          </Blurfade >
   
      </div>
  </>
  );
};

export default MainCard;
