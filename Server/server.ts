import { Request, Response } from "express";

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const PORT = process.env.PORT || 3000;
const FRONTEND_URI = "http://localhost:5173";
const app = express();
let accessToken = "";
let AccessTokenExpiry = 0;
let TimeOfToken = 0;

dotenv.config();
dotenv.config({ path: `.env.local`, override: true });
app.use(cors({ origin: FRONTEND_URI })); // Restrict CORS to frontend only

app.get("/GetSong", async (req:Request, res:Response) => {
  //this will get any song that is playing, or the last song that was played
  console.log(accessToken === "" || Date.now() - TimeOfToken > AccessTokenExpiry)
  if (accessToken === "" || Date.now() - TimeOfToken > AccessTokenExpiry) {
    try { 
      let accessTokenResponse = await (
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
      AccessTokenExpiry = accessTokenResponse.expires_in * 1000;
      TimeOfToken = Date.now();
      accessToken = accessTokenResponse.access_token;
    } catch (e) {
      return res
        .status(500)
        .send({ error: e, reason: "Failed to get access token" });
    }
  }

  if (!accessToken)
    return res
      .status(500)
      .send({
        error: "Failed to get access token",
        reason: "Access token is undefined",
      });
  try {
    var currently_playing_song = await fetch(
      "https://api.spotify.com/v1/me/player/currently-playing",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
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
      let recently_played_songs = await (
        await fetch(
          "https://api.spotify.com/v1/me/player/recently-played?limit=1",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
      ).json();
      return res.status(200).send({
        status: "Recently Played Song",
        data: {
          artist: recently_played_songs.items[0].track.artists[0].name,
          artist_link:
            recently_played_songs.items[0].track.artists[0].external_urls
              .spotify,
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
    const currently_playing_song_data = await currently_playing_song.json();
    return res.status(200).send({
      status: "Currently Playing",
      data: {
        artist: currently_playing_song_data.item.artists[0].name,
        artist_link:
          currently_playing_song_data.item.artists[0].external_urls.spotify,
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
