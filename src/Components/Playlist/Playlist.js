// ----- IMPORT -----
import React, { useEffect, useState, useContext } from 'react';
import './Playlist.css';
import Item from '../Item/Item';
import Label from '../Label/Label';
import loadingImg from '../../Assets/Icons/loading.gif';
import { AppContext } from "../../Context/AppContext";
// ------------------


function getPositionByPlatform(positions, platform) {
  const found = positions.find(position => position.platform === platform);
  return found ? found.position : null;
}

const Playlist = () => {

  const [context, setContext] = useContext(AppContext);

  const [state, setState] = useState({
    tracks: []
  })

  useEffect(() => {
    const url = `https://api.music.mathi3u.com/?country=${context.country}`;
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          setState({
            tracks: result.tracks
          });
          setContext({
            country: context.country,
            lastUpdateDate: result.header.date,
            lastUpdateTime: result.header.time,
            loading: false,
            error: null,
          });
        },
        (error) => {
          setContext({
            country: context.country,
            lastUpdateDate: null,
            lastUpdateTime: null,
            loading: false,
            error: error.message,
          });
        }
      )
  }, [context.country, setContext]);

  if (context.error) {
    return <div className="error"><span className="text-error">Error : {context.error}</span></div> 
  } else if (context.loading === true) {
    return <div className="loading"><img className="loading-img" src={loadingImg} alt="loading"></img></div>
  } else {
    return (
      <section className="playlist">
        <Label/>
        {state.tracks.map((track, index) => (
        <Item
          key={index}
          position={track.position}
          evolution={track.evolution}
          artist={track.artist}
          track={track.track}
          cover={track.cover}
          plateform1={getPositionByPlatform(track.positions, 'spotify')}
          plateform2={getPositionByPlatform(track.positions, 'applemusic')}
          plateform3={getPositionByPlatform(track.positions, 'deezer')}
        />
        ))}
      </section>
    )
  }

  }

export default Playlist;