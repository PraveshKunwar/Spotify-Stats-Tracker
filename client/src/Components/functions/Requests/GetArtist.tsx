import axios from "axios";

const GetArtist = (valid_token: string, id: string, a: number) => {
  if (a === 1) {
    return axios.get(`https://api.spotify.com/v1/artists/${id}`, {
      headers: {
        Authorization: "Bearer " + valid_token,
      },
    });
  } else if (a === 2) {
    return axios.get(
      `https://api.spotify.com/v1/artists/${id}/top-tracks?market=US`,
      {
        headers: {
          Authorization: "Bearer " + valid_token,
        },
      }
    );
  } else if (a === 3) {
    return axios.get(`https://api.spotify.com/v1/artists/${id}/albums`, {
      headers: {
        Authorization: "Bearer " + valid_token,
      },
    });
  } else if (a === 4) {
    return axios.get(
      `https://api.spotify.com/v1/artists/${id}/related-artists`,
      {
        headers: {
          Authorization: "Bearer " + valid_token,
        },
      }
    );
  }
};

export default GetArtist;
