//Requests for all the data we need store in this file.
import axios from "axios";
import { useDispatch } from "react-redux";

const PersonalProfile = (valid_token: string) => {
  const dispatch = useDispatch();
  axios
    .get("https:/api.spotify.com/v1/me", {
      headers: {
        Authorization: "Bearer " + valid_token,
      },
    })
    //@ts-ignore
    .then((res) => {
      dispatch({
        type: "SET_PERSONAL",
        display_name: res.data.display_name,
        external_urls: res.data.external_urls.spotify,
        followers: res.data.followers.total,
        id: res.data.id,
        images: res.data.images[0].url,
      });
    });
};

export default PersonalProfile;
