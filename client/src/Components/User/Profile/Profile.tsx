import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PersonalProfile from "../../functions/Requests";
import Personal from "./Personal";
import Navbar from "../../../Navbar/Navbar";

const Profile = () => {
  //@ts-ignore -Token exists
  const access_token: string = useSelector((state) => state.Token.token);
  const dispatch = useDispatch();
  useEffect(() => {
    PersonalProfile(access_token).then((res) => {
      dispatch({
        type: "SET_PERSONAL",
        display_name: res.data.display_name,
        external_urls: res.data.external_urls.spotify,
        followers: res.data.followers.total,
        id: res.data.id,
        images: res.data.images[0].url,
      });
    });
  }, [dispatch]);

  return (
    <div className="?user_profile?">
      <Navbar />
      {/* react router setup*/}
    </div>
  );
};

export default Profile;
