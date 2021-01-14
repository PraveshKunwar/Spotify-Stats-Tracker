//Requests for all the data we need store in this file.
import axios from "axios";

const PersonalProfile = (valid_token: string) => {
  return axios.get("https:/api.spotify.com/v1/me", {
    headers: {
      Authorization: "Bearer " + valid_token,
    },
  });
  //@ts-ignore
};

export default PersonalProfile;
