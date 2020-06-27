import React, {Component} from 'react';
import { title } from 'process';


class Photo extends Component{
    handleGet = () => {
        const {image} = this.props;
        let newTitle = {
            title: image.title,
            img: image.url

        }

        this.props.getFn(newTitle);
        this.props.resetFn();
    }

    // handleIncrement = () => {
    //     this.setState({index: this.state.index + 1})
    //     }

    // handleDecrement = () => {
    //     this.setState({index: this.state.index - 1})   
    // } 

    render(){
        return(
            <div onClick={this.handleGet}>
            <img src={this.props.photo.url.front_default} alt={this.props.photo.title}/>
            <p>{this.props.photo.title}</p>
        </div>
        )
    }
}
export default Photo;