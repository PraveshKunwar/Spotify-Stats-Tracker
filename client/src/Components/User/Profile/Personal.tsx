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

import CurrentlyPlayingFlexed from "../../Styles/CurrentlyPlayingFlexed";
import CurrentlyPlayingText from "../../Styles/CurrentlyPlayingText";
import CurrentlyPlayingImage from "../../Styles/CurrentlyPlayingImage";

import Hr from "../../Styles/Hr";
import styles from "../../Styles/Sass/Personal.scss";

import FavoriteArtists from "../../functions/Requests/FavoriteArtists";
import FavoriteTracks from "../../functions/Requests/FavoriteTracks";
import CurrentlyPlaying from "../../functions/Requests/CurrentlyPlaying";

const Personal: React.FC = () => {
  //@ts-ignore
  const Profile = useSelector((state) => state.SetPersonal);
  //@ts-ignore
  const access_token = useSelector((state) => state.Token.token);
  const [items, setItems] = useState([]);
  const [tracks, setTracks] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentlyPlayingItems, setCurrentlyPlayingItems] = useState([]);
  useEffect(() => {
    //@ts-ignore
    CurrentlyPlaying(access_token).then((res) => {
      setIsPlaying(res.data.is_playing);
      setCurrentlyPlayingItems(res.data.item);
      console.log(res.data.item);
    });
    FavoriteArtists(access_token).then((res) => {
      setItems(res.data.items);
    });
    FavoriteTracks(access_token).then((res) => {
      setTracks(res.data.items);
      console.log(res.data.items);
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
            {
              //@ts-ignore map exists
              items.map((artists: any) => {
                return (
                  <div>
                    {<FavoriteArtistsImg src={artists.images[0].url} />}
                    {<FavoriteArtistsText>{artists.name}</FavoriteArtistsText>}
                  </div>
                );
              })
            }
            <Hr />
          </FavoriteFlexed>
        </div>
        <div className="?favorite_tracks">
          <Favorite className="favorite">
            Here are your favorite tracks based on your music:
          </Favorite>
          <FavoriteFlexed>
            {
              //@ts-ignore map exists
              tracks.map((track: any) => {
                return (
                  <div>
                    <FavoriteTracksImg
                      src={track.album.images[1].url}
                      alt={track.name}
                    />
                    <FavoriteTracksText
                      href={track.external_urls.spotify}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {track.name}
                    </FavoriteTracksText>
                  </div>
                );
              })
            }
          </FavoriteFlexed>
          <Hr />
        </div>
        {isPlaying === true && currentlyPlayingItems.length !== 0 ? (
          <div className="?currently_playing">
            <Favorite className="favorite">Currently Playing:</Favorite>
            <CurrentlyPlayingFlexed>
              <CurrentlyPlayingText
                href={
                  //@ts-ignore
                  currentlyPlayingItems.external_urls.spotify
                }
                rel="noreferrer"
                target="_blank"
              >
                {
                  //@ts-ignore
                  currentlyPlayingItems.name
                }
              </CurrentlyPlayingText>
              <div>
                <CurrentlyPlayingImage
                  src={
                    //@ts-ignore
                    currentlyPlayingItems.album.images[0].url
                  }
                  alt="?currenltly_playing_image"
                />
              </div>
              ) : ( false )
            </CurrentlyPlayingFlexed>
          </div>
        ) : (
          false
        )}
      </div>
    </div>
  );
};

export default Personal;
