const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 3000;
const FRONTEND_URI = "http://localhost:5173";
const app = express();

app.use(cors({ origin: FRONTEND_URI })); // Restrict CORS to frontend only

app.get("/GetSong", async (req, res) => {
  //this will get any song that is playing, or the last song that was played
  try {
    var accesstoken = await (
      await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization:
            "Basic " +
            Buffer.from(
              `${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`
            ).toString("base64"),
        },
        body: new URLSearchParams({
          grant_type: "refresh_token",
          refresh_token: process.env.REFRESH_TOKEN || "",
        }),
      })
    ).json();
  } catch (e) {
    return res
      .status(500)
      .send({ error: e, reason: "Failed to get access token" });
  }
  try {
    var currently_playing_song = await fetch(
      "https://api.spotify.com/v1/me/player/currently-playing",
      {
        headers: {
          Authorization: `Bearer ${accesstoken.access_token}`,
        },
      }
    );
  } catch (e) {
    return res
      .status(500)
      .send({ error: e, reason: "Failed to get currently palyed songs" });
  }
  if (currently_playing_song.status === 204) {
    try {
      var recently_played_songs = await (
        await fetch(
          "https://api.spotify.com/v1/me/player/recently-played?limit=1",
          {
            headers: {
              Authorization: `Bearer ${accesstoken.access_token}`,
            },
          }
        )
      ).json();
      return res.status(200).send({
        status: "Recently Played Song",
        data: {
          artist: recently_played_songs.items[0].track.artists[0].name,
          artist_link: recently_played_songs.items[0].track.artists[0].external_urls.spotify,
          song: recently_played_songs.items[0].track.name,
          song_link: recently_played_songs.items[0].track.external_urls.spotify,
          played_at: recently_played_songs.items[0].played_at,
        },
      }); //return the song data
    } catch (e) {
      return res
        .status(500)
        .send({ error: e, reason: "Failed to get recently palyed songs" });
    }
  } else {
    let currently_playing_song_data = await currently_playing_song.json();
    return res.status(200).send({
      status: "Currently Playing",
      data: {
      artist: currently_playing_song_data.item.artists[0].name,
      artist_link: currently_playing_song_data.item.artists[0].external_urls.spotify,
      song: currently_playing_song_data.item.name,
      song_link: currently_playing_song_data.item.external_urls.spotify,
      played_at: "Currently Playing",
      },
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
