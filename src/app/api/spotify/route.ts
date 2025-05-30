import { NextResponse } from "next/server";

let accessToken = "";
let accessTokenExpiry = 0;
let timeOfToken = 0;

export async function GET() {
  // Use process.env for secrets (make sure they're in .env.local at the root of your Next.js app)
  const CLIENT_ID = process.env.CLIENT_ID!;
  const CLIENT_SECRET = process.env.CLIENT_SECRET!;
  const REFRESH_TOKEN = process.env.REFRESH_TOKEN!;

  if (!CLIENT_ID || !CLIENT_SECRET || !REFRESH_TOKEN) {
    return NextResponse.json(
      { error: "Missing Spotify credentials" },
      { status: 500 }
    );
  }

  if (accessToken === "" || Date.now() - timeOfToken > accessTokenExpiry) {
    try {
      const tokenRes = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization:
            "Basic " +
            Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64"),
        },
        body: new URLSearchParams({
          grant_type: "refresh_token",
          refresh_token: REFRESH_TOKEN,
        }),
      });
      const tokenData = await tokenRes.json();
      accessTokenExpiry = tokenData.expires_in * 1000;
      timeOfToken = Date.now();
      accessToken = tokenData.access_token;
    } catch (e) {
      return NextResponse.json(
        { error: e, reason: "Failed to get access token" },
        { status: 500 }
      );
    }
  }

  if (!accessToken) {
    return NextResponse.json(
      {
        error: "Failed to get access token",
        reason: "Access token is undefined",
      },
      { status: 500 }
    );
  }

  try {
    const currentlyPlayingRes = await fetch(
      "https://api.spotify.com/v1/me/player/currently-playing",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (currentlyPlayingRes.status === 204) {
      // Nothing currently playing, get recently played
      const recentlyPlayedRes = await fetch(
        "https://api.spotify.com/v1/me/player/recently-played?limit=1",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const recentlyPlayed = await recentlyPlayedRes.json();
      return NextResponse.json({
        status: "Recently Played Song",
        data: {
          artist: recentlyPlayed.items[0].track.artists[0].name,
          artist_link:
            recentlyPlayed.items[0].track.artists[0].external_urls.spotify,
          song: recentlyPlayed.items[0].track.name,
          song_link: recentlyPlayed.items[0].track.external_urls.spotify,
          played_at: recentlyPlayed.items[0].played_at,
        },
      });
    } else {
      const currentlyPlaying = await currentlyPlayingRes.json();
      return NextResponse.json({
        status: "Currently Playing",
        data: {
          artist: currentlyPlaying.item.artists[0].name,
          artist_link: currentlyPlaying.item.artists[0].external_urls.spotify,
          song: currentlyPlaying.item.name,
          song_link: currentlyPlaying.item.external_urls.spotify,
          played_at: "Currently Playing",
        },
      });
    }
  } catch (e) {
    return NextResponse.json(
      { error: e, reason: "Failed to get song data" },
      { status: 500 }
    );
  }
}
