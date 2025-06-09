// SpotifyWidget.tsx
import { useState, useEffect, useCallback } from "react";
import SpotifyWidgetServer from "./SpotifyWidgetServer";
import Pulsingdot from "./ui/ThePingingdot";
import Image from "next/image";
import { Themetype } from "@/portfolio/MainApp";
import Spotifyimg from "@/spotify.png";

type SongData = {
  artist: string;
  song: string;
  artist_link: string;
  song_link: string;
  played_at: string;
  CurrentlyPlaying: string;
};

type Props = {
  ThemeColor: Themetype;
};

function GetTimeDifference(time: string) {
  const playedAt = new Date(time).getTime();
  const now = new Date().getTime();
  const diff = now - playedAt;

  const days = Math.round(diff / (1000 * 60 * 60 * 24));
  const hours = Math.round((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.round((diff % (1000 * 60 * 60)) / (1000 * 60));

  return `
  ${days > 0 ? `${days} day(s) ` : ""}
  ${hours > 0 ? `${hours} hour(s) ` : ""}
  ${minutes > 0 && days <= 0 ? `${minutes} minute(s) ` : ""} ago`;
}

const SpotifyWidget = ({ ThemeColor }: Props) => {
  const [data, setData] = useState<SongData>();
  // Handling client-side update
  const GetData = useCallback(async () => {
    const data = await SpotifyWidgetServer();
    setData(data);
  }, [])
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (data?.CurrentlyPlaying == "Yes")
      interval = setInterval(GetData, 1000 * 60);
    else interval = setInterval(GetData, 5000 * 60);
    return () => clearInterval(interval);
  }, [data, GetData]);
  useEffect(() => {
    window.addEventListener("focus", GetData);
    
    GetData();
    return () => window.removeEventListener("focus", GetData);
  }, [GetData]);

  return (
    <div className="mt-6 pl-4 pr-1 sm:pr-0 flex bg-gray-400/20 box-border h-15 items-center gap-3 w-full py-5 rounded-md">
      {data ? (
        <>
          <div className=" content-center">
            <Pulsingdot
              ThemeColor={ThemeColor}
              song={data.song}
              CurrentlyPlaying={data.CurrentlyPlaying as "Yes" | "No"}
            />
          </div>
          <div className="text-xs">
            {data.song === "Error" ? (
              <p>Error Occured</p>
            ) : data.CurrentlyPlaying === "Yes" ? (
              <p>
                Currently Listening to{" "}
                <a
                  className="font-bold hover:underline"
                  target="_blank"
                  href={data.song_link}
                >
                  {data.song}
                </a>{" "}
                By{" "}
                <a
                  target="_blank"
                  className="font-bold hover:underline"
                  href={data.artist_link}
                >
                  {data.artist}
                </a>{" "}
                on{" "}
                <Image
                  className="size-5 ml-1 inline"
                  src={Spotifyimg}
                  alt="Spotify"
                />
              </p>
            ) : (
              <p>
                Was listening to{" "}
                <a
                  target="_blank"
                  className="font-bold hover:underline"
                  href={data.song_link}
                >
                  {data.song}
                </a>{" "}
                By{" "}
                <a
                  target="_blank"
                  className="font-bold hover:underline"
                  href={data.artist_link}
                >
                  {data.artist}
                </a>{" "}
                on{" "}
                <Image
                  width={24}
                  height={24}
                  className="size-6 ml-1 inline"
                  src="/spotify.png"
                  alt="Spotify"
                />{" "}
                {GetTimeDifference(data.played_at)}
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
