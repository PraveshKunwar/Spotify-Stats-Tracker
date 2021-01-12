import Login from "../Auth/Login";
import { useEffect } from "react";
import GetToken from "../functions/GetToken";

const Landing: React.FC = () => {
  useEffect(() => {
    GetToken();
  }, []);
  return (
    <div className="welcome_screen_?login">
      <Login />
    </div>
  );
};

export default Landing;
