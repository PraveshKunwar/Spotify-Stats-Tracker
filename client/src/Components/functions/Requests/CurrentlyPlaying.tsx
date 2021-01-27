import axios from "axios";

const CurrentlyPlaying = (valid_token: string) => {
  return axios.get("https://api.spotify.com/v1/me/player/currently-playing", {
    headers: {
      Authorization: "Bearer " + valid_token,
    },
  });
};

export default CurrentlyPlaying;
