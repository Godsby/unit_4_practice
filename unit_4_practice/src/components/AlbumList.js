import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Album } from './Album';

class AlbumList extends React.Component {
  constructor() {
    super();
    this.state = {
      albums: [],
      photos: []
    }
  }

  componentDidMount() {
    this.fetchAlbumData('albums');
    this.fetchAlbumData('photos');
  }
  
  fetchAlbumData = async (route) => {
    let res = await axios.get('https://jsonplaceholder.typicode.com/' + route)
    this.setState({
      [route]: res.data.slice(0,50)
    })
  }

  render () {
    //destructure the state
    const { albums, photos } = this.state;
    //loop through the albums array and pass props to Album component for rendering
    let albumList = albums.map(album => {
      return (
        <div className='album card' key={album.id}>
          <li>
            <Link to={'/albums/' + album.id}>{album.title}</Link>
            <Album albums={albums} photos={photos}/> 
          </li>
        </div>
      )
    })
    return (
      <div className='container center'>
        {albumList}
      </div>
    )
  }
}

export default AlbumList;