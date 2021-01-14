import { useSelector } from "react-redux";
import { useEffect } from "react";

const Personal: React.FC = () => {
  //@ts-ignore
  const Profile = useSelector((state) => state.SetPersonal);
  return (
    <div className="personal?_info?">
      <div className="profile_pic_and_name">
        <p>hello world</p>
      </div>
    </div>
  );
};

export default Personal;
