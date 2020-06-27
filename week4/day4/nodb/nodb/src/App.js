import React, {Component} from 'react';
import logo from './logo.svg';
import header from './Components/header'
import photo from './Components/photo'
import favorites from './Components/favorites'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      favorites: []
    }
    this.favorites = this.favorites.bind(this);
  }

  componentDidMount(){
    axios.get('/api/favorites')
    .then(res => {
      this.setState({favorites: res.data})
    })
    .catch(err => console.log(err));
  }

  chooseFavorite(photo){
    axios.post('api/favorites', {photo: photo})
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
    <div>
      <Header />
      <Photo />
      <Favorites />
    </div>
  );
}
}

export default App;
