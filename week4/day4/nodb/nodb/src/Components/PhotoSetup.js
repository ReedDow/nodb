import React, {Component} from 'react';
import axios from 'axios';
import Photo from './Photo';

class PhotoSetup extends Component {
    constructor(props){
        super(props);
        this.state = {
            originalPhoto: [],
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

    render(){
        const mappedPhoto = this.state.originalPhoto.map((photo, i) => (
            <Photo
                key={i}
                photo={photo}
                getFn={this.props.getFn}
                resetFn={this.getPhoto}/>
        ))
        return (
            <div className = 'photos'>
                {mappedPhoto}
            </div>
        )   
    }
}

export default PhotoSetup;