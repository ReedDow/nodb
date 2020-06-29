import React, {Component} from 'react';



class Photo extends Component{
    handleGet = () => {
        const {photo} = this.props;
        let newTitle = {
            title: photo.title,
            img: photo.url
        }

        this.props.getFn(newTitle);
        this.props.resetFn();
    }

    render(){
        return(
            <div onClick={this.handleGet}>
            <img src={this.props.photo.url} alt=''/>
            <p>{this.props.title}</p>
        </div>
        )
    }
}
export default Photo;