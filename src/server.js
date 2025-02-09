import express from 'express';
import querystring from 'querystring';
import cors from 'cors';
import fetch from 'node-fetch'; // Add node-fetch for server-side requests

const CLIENT_ID = "f302d6717ee646ac9f63c300d5c22941";
const CLIENT_SECRET = "e83918c3628c45f9b37b99b0096fc6d4";
const PORT = process.env.PORT || 3000;
const redirect_uri = `http://localhost:${PORT}/callback`;
const FRONTEND_URI = "http://localhost:5173"; // Add your frontend URI

const app = express();
app.use(cors({ origin: FRONTEND_URI })); // Restrict CORS to frontend only
function createRandomString(length) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

// ... createRandomString function remains the same ...

app.get('/login', (req, res) => {
  const state = createRandomString(16);
  const scope = 'user-read-currently-playing user-read-recently-played';
  
  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: CLIENT_ID,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state
    }));
});

app.get('/callback', async (req, res) => {
  const code = req.query.code || null;
  const state = req.query.state || null;

  if (!state) {
    return res.redirect(FRONTEND_URI + '?' +
      querystring.stringify({ error: 'state_mismatch' }));
  }

  try {
    const authHeader = 'Basic ' + Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64');
    const body = new URLSearchParams({
      code: code,
      redirect_uri: redirect_uri,
      grant_type: 'authorization_code'
    });

    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': authHeader
      },
      body: body
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    // Redirect to frontend with access token
    res.redirect(FRONTEND_URI + '?' +
      querystring.stringify({
        access_token: data.access_token,
        refresh_token: data.refresh_token
      }));
    
  } catch (error) {
    console.error('Error:', error);
    res.redirect(FRONTEND_URI + '?' +
      querystring.stringify({ error: 'invalid_token' }));
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});