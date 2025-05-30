import { Themetype } from "@/portfolio/MainApp";

const Pulsingdot = ({
  song,
  CurrentlyPlaying,
  ThemeColor,
}: {
  song: string;
  CurrentlyPlaying: `Yes` | "No";
  ThemeColor: Themetype;
}) => {
  const colorIntensity = ThemeColor === "dark" ? 255 : 255;
  return (
    <div
      className="relative size-2 rounded-full mx-auto"
      style={{
        backgroundColor:
          song === "Error"
            ? `rgb(${colorIntensity}, 100, 0)`
            : CurrentlyPlaying === "Yes"
            ? `rgb(0, ${colorIntensity}, 0)`
            : `rgb(${colorIntensity}, ${colorIntensity - 80}, 0)`,
      }}
    >
      <div
        className="absolute animate-ping -z-10 inset-0 size-2 rounded-full mx-auto"
        style={{
          backgroundColor:
            song === "Error"
              ? `rgb(${colorIntensity}, 0, 0)`
              : CurrentlyPlaying === "Yes"
              ? `rgb(0, ${colorIntensity}, 0)`
              : `rgb(${colorIntensity}, ${colorIntensity - 80}, 0)`,
        }}
      ></div>
    </div>
  );
};

export default Pulsingdot;
