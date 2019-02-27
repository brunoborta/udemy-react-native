import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

// Class based components have lifecycle!
export default class AlbumList extends Component {
  state = {
    albums: []
  }

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => {
        this.setState({
          albums: response.data
        })
      });
  }

  renderAlbums() {
    return this.state.albums.map(album => <AlbumDetail key={album.title} album={album} />);
  }

  render() {
    console.log(this.state.albums);
    return (
      <View>
        {this.renderAlbums()}
      </View>
    )
  }
}