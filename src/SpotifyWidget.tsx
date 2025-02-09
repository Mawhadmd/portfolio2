import { useEffect, useState } from "react";
const CLIENT_ID = "f302d6717ee646ac9f63c300d5c22941";

const SpotifyWidget = () => {
  const [accessToken, setAccessToken] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/login", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setAccessToken(data.access_token);
      })
      .catch((error) => {
        console.warn("Error:", error);
      });

  }, []);

  var getRecentlyPlayed = async () => {
    var RecentlyPlayedSongs;
    try {
      RecentlyPlayedSongs = await (
        await fetch(
          `
https://api.spotify.com/v1/me/player/currently-playing`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
      ).json();
    } catch (error) {
      console.error("Error:", error);
    }
    console.log(RecentlyPlayedSongs);
    return RecentlyPlayedSongs;
  };

  useEffect(() => {
    if (!accessToken) return;
    console.log(getRecentlyPlayed());
  }, [accessToken, getRecentlyPlayed]);
  return <div></div>;
};

export default SpotifyWidget;
