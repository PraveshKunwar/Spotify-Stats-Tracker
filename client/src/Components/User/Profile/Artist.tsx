import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import GetArtist from "../../functions/Requests/GetArtist";

import Hr from "../../Styles/Hr";
import ArtistText from "../../Styles/ArtistText";
import ArtistImage from "../../Styles/ArtistImage";
import ArtistsFlexed from "../../Styles/ArtistsFlexed";
import QuickFactsTable from "../../Styles/QuickFactsTable";

const Artist: React.FC = () => {
  const [id, setId] = useState<string>("");
  const [artist, setArtist] = useState<any[]>([]);
  const [topTracks, setTopTracks] = useState<any[]>([]);
  const [albums, setAlbums] = useState<any[]>([]);
  const [related, setRelated] = useState<any[]>([]);
  const access_token = useSelector((state: any) => state.Token.token);
  useEffect(() => {
    setId(window.location.pathname.split("/")[2]);
    GetArtist(access_token, id, 1)?.then((res) => {
      setArtist(res.data);
    });
    GetArtist(access_token, id, 2)?.then((res) => {
      setTopTracks(res.data);
    });
    GetArtist(access_token, id, 3)?.then((res) => {
      setAlbums(res.data.items);
      console.log(res);
    });
    GetArtist(access_token, id, 4)?.then((res) => {
      setRelated(res.data);
    });
  }, [access_token, id]);
  return (
    <div className="?artist_info font_personal">
      {artist.length === 0 ? (
        false
      ) : (
        <div>
          <ArtistImage
            src={
              //@ts-ignore
              artist.images[0].url
            }
            wid={`${
              //@ts-ignore
              artist.images[1].width
            }px`}
            hei={`
         ${
           //@ts-ignore
           artist.images[1].height
         }
          px`}
            alt="?artist_url"
          />
          <div>
            <ArtistText
              className="flexed_flexed"
              href={
                //@ts-ignore
                artist.external_urls.spotify
              }
              rel="noreferrer"
              target="_blank"
            >
              {
                //@ts-ignore
                artist.name
              }
            </ArtistText>
          </div>
          <Hr />
          <div className="?quick_facts">
            <ArtistText className="flexed_flexed">Quick Facts:</ArtistText>
            <QuickFactsTable>
              <tr>
                <td>Popularity:</td>
                <td>
                  {`${
                    //@ts-ignore
                    artist.popularity
                  }/100`}
                </td>
              </tr>
              <tr>
                <td>Followers:</td>
                <td>
                  {
                    //@ts-ignore
                    artist.followers.total
                  }
                </td>
              </tr>
              <tr>
                <td>Genres:</td>
                <td>
                  {
                    //@ts-ignore
                    artist.genres.join(", ")
                  }
                </td>
              </tr>
              <tr>
                <td>Spotify Link:</td>
                <td>
                  <a
                    id="change_link"
                    href={
                      //@ts-ignore
                      artist.external_urls.spotify
                    }
                  >
                    Link
                  </a>
                </td>
              </tr>
            </QuickFactsTable>
          </div>
        </div>
      )}
      {related.length === 0 ? (
        false
      ) : (
        <div className="?similar">
          <ArtistText className="flexed_flexed">Similar Artists</ArtistText>
          <ArtistsFlexed>
            {
              //@ts-ignore
              related.artists.map((artist) => {
                return (
                  <div>
                    <ArtistImage
                      src={artist.images[0].url}
                      wid="128px"
                      hei="128px"
                    />
                    <ArtistText
                      size="16px"
                      href={`/artist/${
                        //@ts-ignore
                        artist.id
                      }`}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {artist.name}
                    </ArtistText>
                  </div>
                );
              })
            }
          </ArtistsFlexed>
        </div>
      )}
      <Hr />
      {topTracks.length === 0 ? (
        false
      ) : (
        <div className="?top_tracks">
          <ArtistText className="flexed_flexed">Top Tracks</ArtistText>
          <ArtistsFlexed>
            {
              //@ts-ignore
              topTracks.tracks.map((track) => {
                return (
                  <div>
                    <ArtistImage
                      src={
                        //@ts-ignore
                        track.album.images[0].url
                      }
                      wid="128px"
                      hei="128px"
                    />
                    <ArtistText
                      rel="noreferrer"
                      target="_blank"
                      size="16px"
                      href={
                        //@ts-ignore
                        track.external_urls.spotify
                      }
                    >
                      {track.name.split(/[()]+/)[0]}
                    </ArtistText>
                  </div>
                );
              })
            }
          </ArtistsFlexed>
        </div>
      )}
      <Hr />
      {albums.length === 0 ? (
        false
      ) : (
        <div className="?top_albums">
          <ArtistText className="flexed_flexed">Top Albums</ArtistText>
          <ArtistsFlexed>
            {
              //@ts-ignore
              albums.map((album) => {
                return (
                  <div>
                    <ArtistImage
                      src={
                        //@ts-ignore
                        album.images[0].url
                      }
                      wid="128px"
                      hei="128px"
                    />
                    <ArtistText
                      size="16px"
                      href={`/album/${
                        //@ts-ignore
                        album.id
                      }`}
                    >
                      {album.name.split(/[()]+/)}
                    </ArtistText>
                  </div>
                );
              })
            }
          </ArtistsFlexed>
        </div>
      )}
    </div>
  );
};
export default Artist;
