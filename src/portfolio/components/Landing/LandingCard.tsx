import Blurfade from "../ui/Blurfade";
import AboutMe from "./AboutMe";
import Title from "./Title";
import TopButtons from "./TopButtons";
import pfp from "@/20241230_072930.jpg";
import Image from "next/image";
const MainCard = () => {
  return (
    <>
      <div className="aspect-square size-20 flex items-center justify-center overflow-hidden  rounded-full">
        <Image
          src={pfp}
          priority
          alt="Profile Picture"
          className="size-30  border-border rounded-full object-contain  "
        />
      </div>
      <div className="mt-6 space-y-4">
        <div>
          <Blurfade onlyBlur={true} delay={0.1}>
            <Title />
          </Blurfade>
          <TopButtons />
        </div>
        <Blurfade onlyBlur={true} delay={0.1}>
          <AboutMe />
        </Blurfade>
      </div>
    </>
  );
};

export default MainCard;
