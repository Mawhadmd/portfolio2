import globe from "./assets/globe.svg";

const Intro = () => {
    return (
        <h1 className="text-sm font-medium p-1 ">
        Mohammed Awad - Full-Stack Web Developer and Tech Enthuiastic located in{" "}
        <img className="invert size-4 inline" src={globe} /> Saida, Lebanon.
      </h1>
    );
}

export default Intro;
