import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      albums: [],
      currentAlbum: []
    };
  }

  async componentDidMount() {
    try {
      const photos = await axios.get("/api/photos");
      const albums = await axios.get("/api/albums");
      this.setState({
        albums: albums.data.albums,
        currentAlbum: photos.data.photos
      });
      console.log(this.state);
    } catch (error) {}
  }

  render() {
    let landingPhoto;
    if (this.state.currentAlbum[0]) {
      landingPhoto = this.state.currentAlbum[0].photoUrl;
    }

    return (
      <div className="App">
        <div id="appBody">
          <div id="sideMenu">
            <ul id="nav">
              {this.state.albums.map(album => {
                return (
                  <div>
                    <li>{album.name}</li>
                    <hr />
                  </div>
                );
              })}
            </ul>
          </div>
          <div id="photoDisplay">
            {landingPhoto !== undefined ? (
              <img
                src={`/photos/${landingPhoto}`}
                alt="Loading..."
                id="currentImage"
              />
            ) : (
              "Loading..."
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
