import React, { useEffect, useState } from "react";
import Favorite from "../../Styles/Favorite";
import FavoriteFlexed from "../../Styles/FavoriteFlexed";
import FavoriteArtistsText from "../../Styles/FavoriteArtistsText";
import FavoriteArtistsImg from "../../Styles/FavoriteArtistsImg";

import FavoriteTracksText from "../../Styles/FavoriteTracksText";
import FavoriteTracksImg from "../../Styles/FavoriteTrackImg";

import FavoriteArtists from "../../functions/Requests/FavoriteArtists";
import FavoriteTracks from "../../functions/Requests/FavoriteTracks";
import Hr from "../../Styles/Hr";

import { useSelector } from "react-redux";

const More: React.FC = () => {
  const [pathState, setPathState] = useState("");
  const [med, setMed] = useState([]);
  const [long, setLong] = useState([]);
  const [tracksShort, setTracksShort] = useState([]);
  const [tracksMed, setTracksMed] = useState([]);
  //@ts-ignore
  const access_token = useSelector((state) => state.Token.token);
  useEffect(() => {
    FavoriteArtists(access_token, 1)?.then((res) => {
      //med term
      setMed(res.data.items);
    });
    FavoriteArtists(access_token, 2)?.then((res) => {
      //long term
      setLong(res.data.items);
      console.log(res.data.items);
    });
    FavoriteTracks(access_token, 2)?.then((res) => {
      setTracksShort(res.data.items);
    });
    FavoriteTracks(access_token, 3)?.then((res) => {
      setTracksMed(res.data.items);
    });
    if (window.location.pathname.split("/").length > 2) {
      setPathState(window.location.pathname.split("/")[2]);
    }
  }, [access_token]);
  return (
    <div>
      {pathState === "artists" ? (
        <div className="?more_artists font_personal">
          <Favorite className="favorite">
            Here are your favorite artists based on your music (Last 6 Months
            approx):
          </Favorite>
          <FavoriteFlexed>
            {
              //@ts-ignore map exists
              med.map((artists: any) => {
                return (
                  <div>
                    {
                      <div>
                        <FavoriteArtistsImg src={artists.images[0].url} />
                      </div>
                    }
                    {
                      <div>
                        <FavoriteArtistsText href={`/artist/${artists.id}`}>
                          {artists.name}
                        </FavoriteArtistsText>
                      </div>
                    }
                  </div>
                );
              })
            }
          </FavoriteFlexed>
          <Favorite className="favorite">
            Here are your favorite artists based on your music (Several Years
            Back):
          </Favorite>
          <FavoriteFlexed>
            {
              //@ts-ignore map exists
              long.map((artists: any) => {
                return (
                  <div>
                    {
                      <div>
                        <FavoriteArtistsImg src={artists.images[0].url} />
                      </div>
                    }
                    {
                      <div>
                        <FavoriteArtistsText href={`/artist/${artists.id}`}>
                          {artists.name}
                        </FavoriteArtistsText>
                      </div>
                    }
                  </div>
                );
              })
            }
          </FavoriteFlexed>
        </div>
      ) : (
        false
      )}
      {pathState === "tracks" ? (
        <div className="?more_favorite_tracks font_personal">
          <Favorite className="favorite">
            Here are your favorite tracks based on your music (Last 4 Weeks):
          </Favorite>
          <FavoriteFlexed>
            {
              //@ts-ignore map exists
              tracksShort.map((track: any) => {
                return (
                  <div>
                    <div>
                      <FavoriteTracksImg
                        wid="150px"
                        hei="150px"
                        src={track.album.images[1].url}
                        alt={track.name.split("(")[0]}
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
              })
            }
          </FavoriteFlexed>
          <Hr />
          <Favorite className="favorite">
            Here are your favorite tracks based on your music (Last 6 Months):
          </Favorite>
          <FavoriteFlexed>
            {
              //@ts-ignore map exists
              tracksMed.map((track: any) => {
                return (
                  <div>
                    <div>
                      <FavoriteTracksImg
                        wid="150px"
                        hei="150px"
                        src={track.album.images[1].url}
                        alt={track.name.split("(")[0]}
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
              })
            }
          </FavoriteFlexed>
        </div>
      ) : (
        false
      )}
      {pathState === "" ? <div>YESSIR</div> : false}
    </div>
  );
};
export default More;
