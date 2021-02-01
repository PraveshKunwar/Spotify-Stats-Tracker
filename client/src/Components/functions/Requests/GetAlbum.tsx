import axios from "axios";

const GetAlbum = (valid_token: string, id: string, a: number) => {
  if (a === 1) {
    return axios.get(`https://api.spotify.com/v1/albums/${id}`, {
      headers: {
        Authorization: "Bearer " + valid_token,
      },
    });
  } else if (a === 2) {
    return axios.get(`https://api.spotify.com/v1/albums/${id}/tracks`, {
      headers: {
        Authorization: "Bearer " + valid_token,
      },
    });
  }
};

export default GetAlbum;
