import { useEffect } from "react";
import { useSelector } from "react-redux";
import PersonalProfile from "../../functions/Requests";

const Profile = () => {
  //@ts-ignore -Token exists
  const access_token: string = useSelector((state) => state.Token.token);
  useEffect(() => {
    PersonalProfile(access_token);
  }, []);

  return <div>hello world!</div>;
};

export default Profile;
