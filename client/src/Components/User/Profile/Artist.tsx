import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import GetArtist from "../../functions/Requests/GetArtist";

const Artist: React.FC = () => {
  const [id, setId] = useState("");
  const [artist, setArtist] = useState([]);
  const access_token = useSelector((state: any) => state.Token.token);
  useEffect(() => {
    setId(window.location.pathname.split("/")[2]);
    GetArtist(access_token, id).then((res) => {
      setArtist(res.data);
    });
  }, [access_token]);
  return <div className="?artist_info"></div>;
};
export default Artist;
