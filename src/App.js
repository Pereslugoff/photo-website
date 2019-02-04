import React, { Component } from "react";
import PhotoDisplay from './components/PhotoDisplay'
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      albums: [],
      currentAlbum: [],
      currentPosition: 0
    };

    this.selectCurrent = this.selectCurrent.bind(this)
    this.changeImage = this.changeImage.bind(this)
  }

  async componentDidMount() {
    try {
      const albums = await axios.get("/api/albums");
      const current = await axios.get("/api/albums/1");
      this.setState({
        albums: albums.data.albums,
        currentAlbum: current.data.photos
      });
    } catch (error) {}
  }

  async selectCurrent(albumId) {
    const current = await axios.get(`/api/albums/${albumId}`)
    this.setState({ 
      currentAlbum: current.data.photos,
      currentPosition: 0,
    })
  }

  changeImage(direction){
    if (direction === "next") {
      if (this.state.currentPosition === this.state.currentAlbum.length - 1) {
        this.setState({ currentPosition: 0 })
      } else {
        this.setState({ currentPosition: this.state.currentPosition + 1 })
      }
    } else {
      if (this.state.currentPosition === 0) {
        this.setState({ currentPosition: this.state.currentAlbum.length - 1 })
      } else {
        this.setState({ currentPosition: this.state.currentPosition - 1 })
      }
    }
  };

  render() {
    let load = false
    if(this.state.currentAlbum.length > 0){
      load = !load
    }


    return (
      <div className="App">
        <div id="appBody">
          <div id="sideMenu">
            <h1 id="header">Nick Pereslugoff</h1>
            <ul id="nav">
              {this.state.albums.map(album => {
                return (
                  <div onClick={() => this.selectCurrent(album.id)}>
                    <li>{album.name}</li>
                  </div>
                );
              })}
            </ul>
            <ul id="footer">
              <li>Contact</li>
              <li>Bio</li>
            </ul>
          </div>
          <div id="photoDisplay">
              {
                load
                ?
                <PhotoDisplay 
                  photo={this.state.currentAlbum[this.state.currentPosition]} 
                  changeImage={this.changeImage}
                />
                :
                "Loading..."
              }
          </div>
        </div>
      </div>
    );
  }
}

export default App