// ----- IMPORT -----
import React from 'react';
import './Playlist.css';
import Item from '../Item/Item';
import Label from '../Label/Label';
import loading from '../../Assets/Icons/loading.gif' ;

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
      const url = "http://topmusicstreaming.com/api?country=fr";
      fetch(url)
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
        return <div className="error"><span className="text-error">Error : {error.message}</span></div>;
      } else if (!isLoaded) {
        return <div className="loading"><img className="loading-img" src={loading} alt="loading"></img></div>;
      } else {
        return (
          <section className="playlist">
            <Label/>
            {tracks.map((track, index) => (
              <Item key={index} position={track.position} evolution={track.evolution} artist={track.artist} track={track.track} cover={track.cover} plateform1={track.positions.p1} plateform2={track.positions.p2} plateform3={track.positions.p3}/>
            ))}
          </section>
        );
      }
    }
  }

export default Playlist;