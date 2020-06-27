import React, {Component} from 'react';
import Axios from 'axios';
import photoCtrl from '../../server/controllers/photoCtrl';

class Photo extends Component{
    constructor(props){
        super(props);
        this.state = {
            originalPhoto: [],
            index: 0,
            title: photo.title,
            img: photo.url
        }
    }

    componentDidMount(){
        this.getPhoto();
    }

    getPhoto = () => {
        axios.get('/api/photos')
        .then(res => {
            this.setState({originalPhoto: res.data})
        })
        .catch(err => console.log(err))
    }

    handleIncrement = () => {
        this.setState({index: this.state.index + 1})
        }

    handleDecrement = () => {
        this.setState({index: this.state.index - 1})   
    } 
}