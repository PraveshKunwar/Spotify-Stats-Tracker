import axios from "axios";

const FavoriteArtists = (valid_token: string) => {
  return axios.get("https://api.spotify.com/v1/me/top/artists", {
    headers: {
      Authorization: "Bearer " + valid_token,
    },
  });
};

export default FavoriteArtists;
