import Login from "../Auth/Login";
import Profile from "./Profile/Profile";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GenerateSpotifyToken from "../functions/GenerateSpotifyToken";
import setLogged from "../../actions/SET_LOGGED";
interface AccessToken {
  access_token: string;
}

const Landing: React.FC = () => {
  //@ts-ignore
  const [accessToken, setAccessToken] = useState<AccessToken>({
    access_token: "",
  });
  //@ts-ignore
  const isLogged: boolean = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  useEffect(() => {
    const Hash = GenerateSpotifyToken();
    window.location.hash = "";
    //@ts-ignore
    const token = Hash.access_token;
    if (token) {
      dispatch(setLogged);
      setAccessToken({ access_token: token });
    }
  }, [dispatch]);
  return (
    <div className="welcome_screen_?login">
      {isLogged ? <Profile /> : <Login />}
      <p>{accessToken}</p>
    </div>
  );
};

export default Landing;
