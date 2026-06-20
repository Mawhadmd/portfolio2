import { title } from "@/constants";
import { Globe } from "lucide-react";
import GradientText from "../ui/GradientText";

const Intro = () => {
    return (
        <p >
        Mohammed Awad - <GradientText>{title}</GradientText> located in{" "}
        <Globe className="h-full inline"/> Saida, Lebanon.
      </p>
    );
}

export default Intro;
