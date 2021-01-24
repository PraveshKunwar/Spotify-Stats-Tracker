//define scopes
const scopes = [
  "ugc-image-upload",
  "user-read-recently-played",
  "user-top-read",
  "user-read-playback-position",
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-currently-playing",
  "app-remote-control",
  "streaming",
  "playlist-modify-public",
  "playlist-modify-private",
  "playlist-read-private",
  "playlist-read-collaborative",
  "user-follow-modify",
  "user-follow-read",
  "user-library-modify",
  "user-library-read",
  "user-read-email",
  "user-read-private",
];

require("dotenv").config();
const authEndpoint = "https://accounts.spotify.com/authorize";
const CLIENT_ID = process.env.CLIENT_ID;
const redirectUri = process.env.REDIRECT || "http://localhost:5000/callback";

const SpotifyURL: string = `${authEndpoint}?client_id=${CLIENT_ID}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

export default SpotifyURL;
