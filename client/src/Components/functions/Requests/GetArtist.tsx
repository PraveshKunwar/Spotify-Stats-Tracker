import axios from "axios";

const GetArtist = (valid_token: string, id: string) => {
  return axios.get(`https://api.spotify.com/v1/artists/${id}`, {
    headers: {
      Authorization: "Bearer " + valid_token,
    },
  });
};

export default GetArtist;
