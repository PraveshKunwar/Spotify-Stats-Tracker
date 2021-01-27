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
    FavoriteArtists(access_token).then((res) => {
      setItems(res.data.items);
    });
    FavoriteTracks(access_token).then((res) => {
      setTracks(res.data.items);
      console.log(res.data.items);
    });
    CurrentlyPlaying(access_token).then((res) => {
      setIsPlaying(res.data.is_playing);
      setCurrentlyPlayingItems(res.data.item);
      console.log(res.data.item);
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
            <Hr />
          </FavoriteFlexed>
        </div>
        <div className="?favorite_tracks">
          <Favorite className="favorite">
            Here are your favorite tracks based on your music:
          </Favorite>
          <FavoriteFlexed>
            {tracks.map((track) => {
              return (
                <div>
                  <FavoriteTracksImg
                    //@ts-ignore
                    src={track.album.images[1].url}
                    //@ts-ignore
                    alt={track.name}
                  />
                  <FavoriteTracksText
                    //@ts-ignore
                    href={track.external_urls.spotify}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {
                      //@ts-ignore
                      track.name
                    }
                  </FavoriteTracksText>
                </div>
              );
            })}
          </FavoriteFlexed>
          <Hr />
        </div>
        {isPlaying === true ? (
          <div className="?currently_playing">
            <Favorite className="favorite">Currently Playing:</Favorite>
            <CurrentlyPlayingFlexed>
              <div>
                <CurrentlyPlayingImage
                  src={
                    //@ts-ignore
                    currentlyPlayingItems.album.images[0].url
                  }
                  alt="?currenltly_playing_image"
                />
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
              </div>
            </CurrentlyPlayingFlexed>
            <audio controls>
              <source
                src={
                  //@ts-ignore
                  currentlyPlayingItems.preview_url
                }
              ></source>
            </audio>
          </div>
        ) : (
          false
        )}
      </div>
    </div>
  );
};

export default Personal;
