import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PersonalProfile from "../../functions/Requests/PersonalProfile";
import React from "react";
import Navbar from "../../Navbar/Navbar";

const Profile: React.FC = () => {
  const access_token: string = useSelector((state: any) => state.Token.token);

  const checkNull = useSelector((state: any) => state.SetPersonal);
  const dispatch = useDispatch();
  useEffect(() => {
    PersonalProfile(access_token).then((res) => {
      dispatch({
        type: "SET_PERSONAL",
        display_name: res.data.display_name,
        external_urls: res.data.external_urls.spotify,
        followers: res.data.followers.total,
        id: res.data.id,
        image: res.data.images[0].url,
      });
    });
  });

  return (
    <div className="?user_profile?">
      {checkNull === null ? false : <Navbar />}
    </div>
  );
};

export default Profile;
