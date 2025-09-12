import { title } from "@/constants";
import { Globe } from "lucide-react";

const Intro = () => {
    return (
        <p >
        Mohammed Awad - <b>{title}</b> located in{" "}
        <Globe className="h-full inline"/> Saida, Lebanon.
      </p>
    );
}

export default Intro;
