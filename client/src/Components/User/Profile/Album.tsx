import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import GetAlbum from "../../functions/Requests/GetAlbum";

import Hr from "../../Styles/Hr";
import AlbumImage from "../../Styles/AlbumImage";
import AlbumName from "../../Styles/AlbumName";
import AlbumFlexed from "../../Styles/AlbumFlexed";
import QuickFactsTable from "../../Styles/QuickFactsTable";

const Album: React.FC = () => {
  const [id, setId] = useState<string>("");
  const [album, setAlbum] = useState<any[]>([]);
  const [tracks, setTracks] = useState<any[]>([]);
  const access_token = useSelector((state: any) => state.Token.token);
  useEffect(() => {
    setId(window.location.pathname.split("/")[2]);
    GetAlbum(access_token, id, 1)?.then((res) => {
      setAlbum(res.data);
    });
    GetAlbum(access_token, id, 2)?.then((res) => {
      setTracks(res.data.items);
      console.log(res.data);
    });
  }, [access_token, id]);
  return (
    <div className="?album font_personal">
      {album.length === 0 ? (
        false
      ) : (
        <div>
          <AlbumImage
            src={
              //@ts-ignore
              album.images[0].url
            }
            wid="300px"
            hei="300px"
          />
          <AlbumName
            rel="noreferrer"
            target="_blank"
            className="flexed_flexed"
            href={
              //@ts-ignore
              album.external_urls.spotify
            }
          >
            {
              //@ts-ignore
              album.name
            }
          </AlbumName>
          <QuickFactsTable>
            <tr>
              <td>Album Artist:</td>
              <td>
                <AlbumName
                  size="18px"
                  href={`/artist/${
                    //@ts-ignore
                    album.artists[0].id
                  }`}
                >
                  {
                    //@ts-ignore
                    album.artists[0].name
                  }
                </AlbumName>
              </td>
            </tr>
            <tr>
              <td>Popularity:</td>
              <td>
                {`${
                  //@ts-ignore
                  album.popularity
                }/100`}
              </td>
            </tr>
            <tr>
              <td>Release Date:</td>
              <td>
                {`${
                  //@ts-ignore
                  album.release_date
                }`}
              </td>
            </tr>
            <tr>
              <td>Total Tracks:</td>
              <td>
                {
                  //@ts-ignore
                  album.total_tracks
                }
              </td>
            </tr>
            <tr>
              <td>Copyrights:</td>
              <td>{`${
                //@ts-ignore
                album.copyrights[0].text
              }`}</td>
            </tr>
          </QuickFactsTable>
          <Hr />
          <div className="?tracks">
            <AlbumFlexed>
              {
                //@ts-ignore
                tracks.map((track) => {
                  return (
                    <div>
                      <AlbumName
                        rel="noreferrer"
                        target="_blank"
                        size="16px;"
                        href={
                          //@ts-ignore
                          track.external_urls.spotify
                        }
                      >
                        {
                          //@ts-ignore
                          track.name.split(/[()]+/)[0]
                        }
                      </AlbumName>
                      {track.preview_url === null ? (
                        false
                      ) : (
                        <audio controls>
                          <source
                            src={
                              track.preview_url
                              //@ts-ignore
                            }
                          ></source>
                        </audio>
                      )}
                    </div>
                  );
                })
              }
            </AlbumFlexed>
          </div>
        </div>
      )}
    </div>
  );
};

export default Album;
