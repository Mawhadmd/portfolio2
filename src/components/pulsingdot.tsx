

const Pulsingdot = ({song, CurrentlyPlaying, ThemeColor}: {song:string; CurrentlyPlaying: `Yes` | "No",  ThemeColor: 'light' | 'dark';}) => {
    let colorIntensity = ThemeColor === 'dark'? 300: 600
    return (
        <div
          className="relative size-2 rounded-full mx-auto"
          style={{
            backgroundColor:
              song === "Error"
                ? `rgb(${colorIntensity}, 0, 0)`
                : CurrentlyPlaying === "Yes"
                ? `rgb(0, ${colorIntensity}, 0)`
                : `rgb(${colorIntensity}, ${colorIntensity}, 0)`,
          }}
        >
          <div
            className="absolute animate-ping -z-10 inset-0 size-2 rounded-full mx-auto"
            style={{
              backgroundColor:
                song === "Error"
                  ? `rgba(${colorIntensity}, 0, 0, 0.5)`
                  : CurrentlyPlaying === "Yes"
                  ? `rgba(0, ${colorIntensity}, 0, 0.5)`
                  : `rgba(${colorIntensity}, ${colorIntensity}, 0, 0.5)`,
            }}
          ></div>
        </div>
    );
}

export default Pulsingdot;
