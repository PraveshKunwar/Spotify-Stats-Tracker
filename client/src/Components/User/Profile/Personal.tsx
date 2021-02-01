import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ProfilePic from "../../Styles/ProfilePic";
import ProfileName from "../../Styles/ProfileName";
import Favorite from "../../Styles/Favorite";
import FavoriteFlexed from "../../Styles/FavoriteFlexed";
import FavoriteArtistsText from "../../Styles/FavoriteArtistsText";
import FavoriteArtistsImg from "../../Styles/FavoriteArtistsImg";

import FavoriteTracksText from "../../Styles/FavoriteTracksText";
import FavoriteTracksImg from "../../Styles/FavoriteTrackImg";
import Button from "../../Styles/Button";

import Hr from "../../Styles/Hr";
import styles from "../../Styles/Sass/Personal.scss";

import FavoriteArtists from "../../functions/Requests/FavoriteArtists";
import FavoriteTracks from "../../functions/Requests/FavoriteTracks";

const Personal: React.FC = () => {
  const Profile = useSelector((state: any) => state.SetPersonal);

  const access_token = useSelector((state: any) => state.Token.token);
  const [short, setShort] = useState<any[]>([]);
  const [tracks, setTracks] = useState<any[]>([]);

  useEffect(() => {
    FavoriteArtists(access_token, 3)?.then((res) => {
      //short term
      setShort(res.data.items);
    });
    FavoriteTracks(access_token, 1)?.then((res) => {
      setTracks(res.data.items);
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
            Here are your favorite artists based on your music (Last 4 Weeks
            approx):
          </Favorite>
          <FavoriteFlexed>
            {short.map((artists: any) => {
              return (
                <div>
                  <div>
                    {<FavoriteArtistsImg src={artists.images[0].url} />}
                  </div>
                  <div>
                    {
                      <FavoriteArtistsText href={`/artist/${artists.id}`}>
                        {artists.name}
                      </FavoriteArtistsText>
                    }
                  </div>
                </div>
              );
            })}
          </FavoriteFlexed>
          <Button className="button_font">
            <a href="/more/artists">See more artists</a>
          </Button>
          <Hr />
        </div>
        <div className="?favorite_tracks">
          <Favorite className="favorite">
            Here are your favorite tracks based on your music (Last Several
            Years):
          </Favorite>
          <FavoriteFlexed>
            {tracks.map((track: any) => {
              return (
                <div>
                  <div>
                    <FavoriteTracksImg
                      wid="150px"
                      hei="150px"
                      src={track.album.images[1].url}
                      alt={track.name}
                    />
                  </div>
                  <div>
                    <FavoriteTracksText
                      href={track.external_urls.spotify}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {track.name.split("(")[0]}
                    </FavoriteTracksText>
                  </div>
                </div>
              );
            })}
          </FavoriteFlexed>
          <Button className="button_font">
            <a href="/more/tracks">See more tracks</a>
          </Button>
          <Hr />
        </div>
      </div>
    </div>
  );
};

export default Personal;
