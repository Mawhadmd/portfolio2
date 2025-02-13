

const Pulsingdot = ({song, CurrentlyPlaying}: {song:string, CurrentlyPlaying: "Yes" | "No"}) => {
    return (
        <div
        className={`relative size-2 rounded-full mx-auto ${
          song === "Error"
            ? "bg-red-300"
            : CurrentlyPlaying == "Yes"
            ? "bg-green-300"
            : "bg-yellow-300"
        }`}
      >
        <div
          className={`absolute animate-ping -z-10 inset-0 size-2 rounded-full mx-auto ${
            song === "Error"
              ? "bg-red-600"
              : CurrentlyPlaying == "Yes"
              ? "bg-green-600"
              : "bg-yellow-600"
          }`}
        ></div>
      </div>
    );
}

export default Pulsingdot;
