// ----- IMPORT -----
import React from 'react';
import './Playlist.css';
import Item from '../Item/Item';

// ------------------


class Playlist extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        tracks: []
      };
    }
  
    componentDidMount() {
      fetch("http://topmusicstreaming.com/api?country=fr")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              tracks: result.tracks
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, tracks } = this.state;
      if (error) {
        return <div>Erreur : {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Chargement…</div>;
      } else {
        return (
          <section className="playlist">
            {tracks.map((track, index) => (
              <Item key={index} position={track.position} evolution={track.evolution} artist={track.artist} track={track.track} cover={track.cover} plateform1={track.positions.p1} plateform2={track.positions.p2} plateform3={track.positions.p3}/>
            ))}
          </section>
        );
      }
    }
  }

export default Playlist;