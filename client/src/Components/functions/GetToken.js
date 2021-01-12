import GenerateSpotifyToken from "./GenerateSpotifyToken";
import { useDispatch } from "react-redux";
import SET_TOKEN from "../../actions/SET_TOKEN";

const GetToken = () => {
  const Hash = GenerateSpotifyToken();
  window.location.hash = "";
  const token = Hash.access_token;
  if (token) {
    //dispatch
  }
};

export default GetToken;
