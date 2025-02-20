import { useEffect, useState } from "react";
import spotify from "../assets/spotify.png";
import Pulsingdot from "./pulsingdot";

type SongData = {
 
  artist: string;
  song: string;
  played_at: string;
  CurrentlyPlaying: "Yes" | "No";
  artist_link: string;
  song_link: string;
};
const SpotifyWidget = ({ ThemeColor}: { ThemeColor: 'light' | 'dark'}) => {
  const [songData, SetSongData] = useState<SongData>();

  function GetTimeDifference(time: string) {
    const playedAt = new Date(time).getTime();
    const now = new Date().getTime();
    const diff = now - playedAt;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    return `${days > 0 ? `${days} day(s) ` : ""}${
      hours > 0 ? `${hours} hour(s) ` : ""
    }${minutes} minute(s) ago`;
  }
  function fetchsongdata(){
    fetch("https://portfolio2-rjdb.onrender.com/GetSong", {
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok" + response.statusText);
        }

        return response.json();
      })
      .then((data) => {
        
        if (data.status == "Recently Played Song")
          SetSongData({ ...data.data, CurrentlyPlaying: "No" });
        if (data.status == "Currently Playing")
          SetSongData({ ...data.data, CurrentlyPlaying: "Yes" });
      })
      .catch((error) => {
        console.warn("Error:", error);
        SetSongData({
          artist: "",
          song: "Error",
          artist_link: "",
          song_link: "",
          played_at: "",
          CurrentlyPlaying: "No",
        });
      });
  }
  useEffect(() => {
    fetchsongdata()
    let interval = setInterval(() => {
      fetchsongdata()
    }, 1000 * 60 * 6);
    return () => {
      clearInterval(interval)
    }
  }, []);

  return (
    <div className="mt-6 pl-4 flex bg-gray-400/20 box-border h-15 items-center gap-3 w-full py-5 rounded-md">
      {songData ? (
        <>
          <div className=" content-center">
            <Pulsingdot
            ThemeColor={ThemeColor}
              song={songData.song}
              CurrentlyPlaying={songData.CurrentlyPlaying}
            />
          </div>
          <div className="text-xs">
            {songData.song == "Error" ? (
              <p>Error Occured</p>
            ) : songData.CurrentlyPlaying == "Yes" ? (
              <p>
                Currently Listening to{" "}
                <a
                  className="font-bold hover:underline"
                  target="_blank"
                  href={songData.song_link}
                >
                  {songData.song}
                </a>{" "}
                By{" "}
                <a
                  target="_blank"
                  className="font-bold hover:underline"
                  href={songData.artist_link}
                >
                  {" "}
                  {songData.artist}
                </a>{" "}
                on{" "}
                <img
                  className="size-5  ml-1 inline"
                  src={spotify}
                  alt="Spotify"
                />
              </p>
            ) : (
              <p>
                Was listening to{" "}
                <a
                  target="_blank"
                  className="font-bold hover:underline"
                  href={songData.song_link}
                >
                  {songData.song}
                </a>{" "}
                By{" "}
                <a
                  target="_blank"
                  className="font-bold hover:underline"
                  href={songData.artist_link}
                >
                  {" "}
                  {songData.artist}
                </a>
                <img
                  className="size-6 ml-1 inline"
                  src={spotify}
                  alt="Spotify"
                />{" "}
                {GetTimeDifference(songData.played_at)}
              </p>
            )}
          </div>
        </>
      ) : (
        <>
          <div>
            <svg
              aria-hidden="true"
              className="size-5 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          </div>
          <small>Loading</small>
        </>
      )}
    </div>
  );
};

export default SpotifyWidget;
