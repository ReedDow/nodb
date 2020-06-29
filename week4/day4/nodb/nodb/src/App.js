import React, {Component} from 'react';
import Header from './Components/Header'
import PhotoSetup from './Components/PhotoSetup'
import FavoriteSetup from './Components/FavSetup'
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      favorites: []
    }
    this.chooseFavorite = this.chooseFavorite.bind(this);
  }

  componentDidMount(){
    axios.get('/api/favorites')
    .then(res => {
      this.setState({favorites: res.data})
    })
    .catch(err => console.log(err));
  }

  chooseFavorite(photo){
    axios.post('/api/favorites', {photo: photo})
    .then(res => {
      this.setState({favorites: res.data})
    })
    .catch(err => console.log(err))
  }

  editTitle = (id, newTitle) => {
    let body = {title: newTitle};

    axios.put(`/api/favorites/${id}`, body)
    .then(res => {
      this.setState({favorites: res.data})
    })
    .catch(err => console.log(err));
  }

  deleteFavoritePhoto = (id)=> {
    axios.delete(`/api/favorites/${id}`)
    .then(res => {
      this.setState({favorites: res.data})
    })
    .catch(err => console.log(err));
  }

  
  render(){
  return (
    <div className = 'App'>
      <Header />
      <PhotoSetup 
        getFn={this.chooseFavorite}/>
      <FavoriteSetup 
        favorites={this.state.favorites}
        titleFn={this.editTitle}
        deleteFn={this.deleteFavoritePhoto}/>
    </div>
  );
}
}

export default App;
