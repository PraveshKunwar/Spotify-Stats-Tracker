import Login from "../Auth/Login";
import Profile from "./Profile/Profile";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GenerateSpotifyToken from "../functions/GenerateSpotifyToken";
import setLogged from "../../actions/SET_LOGGED";

const Landing: React.FC = () => {
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
      dispatch({
        type: "SET_TOKEN",
        token: token,
      });
    }
  }, [dispatch]);
  return (
    <div className="welcome_screen_?login">
      {isLogged ? (
        <Profile />
      ) : (
        <div className="?logged_in?_and_creator?">
          <Login />
        </div>
      )}
      <p></p>
    </div>
  );
};

export default Landing;
