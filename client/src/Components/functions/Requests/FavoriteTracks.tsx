import axios from "axios";

const FavoriteTracks = (valid_token: string, a?: number) => {
  if (a === 1) {
    return axios.get(
      "https://api.spotify.com/v1/me/top/tracks?limit=50&time_range=long_term",
      {
        headers: {
          Authorization: "Bearer " + valid_token,
        },
      }
    );
  } else if (a === 2) {
    return axios.get(
      "https://api.spotify.com/v1/me/top/tracks?limit=50&time_range=short_term",
      {
        headers: {
          Authorization: "Bearer " + valid_token,
        },
      }
    );
  } else if (a === 3) {
    return axios.get(
      "https://api.spotify.com/v1/me/top/tracks?limit=50&time_range=medium_term",
      {
        headers: {
          Authorization: "Bearer " + valid_token,
        },
      }
    );
  }
};

export default FavoriteTracks;
