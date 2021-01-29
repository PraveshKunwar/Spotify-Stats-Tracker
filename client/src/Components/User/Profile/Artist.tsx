import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import GetArtist from "../../functions/Requests/GetArtist";

import Hr from "../../Styles/Hr";
import ArtistText from "../../Styles/ArtistText";
import ArtistImage from "../../Styles/ArtistImage";
import ArtistsFlexed from "../../Styles/ArtistsFlexed";
import QuickFactsTable from "../../Styles/QuickFactsTable";

const Artist: React.FC = () => {
  const [id, setId] = useState("");
  const [artist, setArtist] = useState<any[]>([]);
  const [topTracks, setTopTracks] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [related, setRelated] = useState([]);
  const access_token = useSelector((state: any) => state.Token.token);
  useEffect(() => {
    setId(window.location.pathname.split("/")[2]);
    GetArtist(access_token, id, 1)?.then((res) => {
      setArtist(res.data);
      console.log(res.data);
    });
    GetArtist(access_token, id, 2)?.then((res) => {
      setTopTracks(res.data.items);
    });
    GetArtist(access_token, id, 3)?.then((res) => {
      setAlbums(res.data.items);
    });
    GetArtist(access_token, id, 4)?.then((res) => {
      setRelated(res.data);
      console.log(res.data);
    });
  }, [access_token, id]);
  return (
    <div className="?artist_info font_personal">
      {(artist: any) =>
        artist.length === 0 ? (
          false
        ) : (
          <div>
            <ArtistImage
              src={artist.images[0].url}
              wid={`${artist.images[1].width}px`}
              hei={`
         ${artist.images[1].height}
          px`}
              alt="?artist_url"
            />
            <div>
              <ArtistText
                className="flexed_flexed"
                href={artist.external_urls.spotify}
                rel="noreferrer"
                target="_blank"
              >
                {artist.name}
              </ArtistText>
            </div>
            <Hr />
            <div className="?quick_facts">
              <ArtistText className="flexed_flexed">Quick Facts:</ArtistText>
              <QuickFactsTable>
                <tr>
                  <td>Popularity:</td>
                  <td>{`${artist.popularity}/100`}</td>
                </tr>
                <tr>
                  <td>Followers:</td>
                  <td>{artist.followers.total}</td>
                </tr>
                <tr>
                  <td>Genres:</td>
                  <td>{artist.genres.join(", ")}</td>
                </tr>
                <tr>
                  <td>Spotify Link:</td>
                  <td>
                    <a id="change_link" href={artist.external_urls.spotify}>
                      Link
                    </a>
                  </td>
                </tr>
              </QuickFactsTable>
            </div>
          </div>
        )
      }
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
    </div>
  );
};
export default Artist;
