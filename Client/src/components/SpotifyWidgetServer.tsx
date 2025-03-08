// SpotifyWidgetServer.tsx

type SongData = { artist: string;
    song: string;
    artist_link: string;
    song_link: string;
    played_at: string;
    CurrentlyPlaying: string;}
const SpotifyWidgetServer = async (): Promise<SongData> => {
  const res = await fetch("https://portfolio2-rjdb.onrender.com/GetSong");
  const data = await res.json();
  
  if (data.status === "Recently Played Song") {
    return { ...data.data, CurrentlyPlaying: "No" };
  }
  
  if (data.status === "Currently Playing") {
    return { ...data.data, CurrentlyPlaying: "Yes" };
  }

return {
    artist: "",
    song: "Error",
    artist_link: "",
    song_link: "",
    played_at: "",
    CurrentlyPlaying: "No",
};
};

export default SpotifyWidgetServer;
