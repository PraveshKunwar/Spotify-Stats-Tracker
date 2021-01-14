import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ProfilePic from "../../Styles/ProfilePic";
import ProfileName from "../../Styles/ProfileName";
import Favorite from "../../Styles/Favorite";
import FavoriteFlexed from "../../Styles/FavoriteFlexed";
import FavoriteArtistsText from "../../Styles/FavoriteArtistsText";
import FavoriteArtistsImg from "../../Styles/FavoriteArtistsImg";
import Hr from "../../Styles/Hr";
import styles from "../../Styles/Sass/Personal.scss";

import FavoriteArtists from "../../functions/Requests/FavoriteArtists";

const Personal: React.FC = () => {
  //@ts-ignore
  const Profile = useSelector((state) => state.SetPersonal);
  //@ts-ignore
  const access_token = useSelector((state) => state.Token.token);
  const [items, setItems] = useState([]);
  useEffect(() => {
    //@ts-ignore
    FavoriteArtists(access_token).then((res) => {
      setItems(res.data.items);
    });
  }, [access_token]);

  return (
    <div className="personal?_info?" style={styles}>
      <div className="profile_pic_and_name font_personal">
        <ProfilePic src={Profile.image}></ProfilePic>
        <ProfileName
          className="flexed_flexed"
          href={Profile.external_urls}
          rel="noreferrer"
          target="_blank"
        >
          Welcome {Profile.display_name}.
        </ProfileName>
        <Hr />

        <div className="?favorite_artists?">
          <Favorite className="favorite">
            Here are your favorite artists based on your music:
          </Favorite>
          <FavoriteFlexed>
            {items.map((artists) => {
              return (
                <div>
                  {
                    //@ts-ignore}
                    <FavoriteArtistsImg src={artists.images[0].url} />
                  }
                  {
                    //@ts-ignore}
                    <FavoriteArtistsText>{artists.name}</FavoriteArtistsText>
                  }
                </div>
              );
            })}
          </FavoriteFlexed>
        </div>
      </div>
    </div>
  );
};

export default Personal;
