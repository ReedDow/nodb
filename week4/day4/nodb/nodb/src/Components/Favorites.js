import React, {Component} from 'react';

class Favorites extends Component{
    constructor(props){
        super(props);
        this.state = {
            editing: false,
            titleInput: '',
        }
    }

    handleInput = (val) => {
        this.setState({titleInput: val})
    }

    handleToggle = () => {
        this.setState({editing: !this.state.editing})
    }

    handleEdit = (id) => {
        this.props.titleFn(id, this.state.titleInput);
        this.handleToggle();
    }

    render(){
        return(
            <div>
                <img src={this.props.photo.img}
                alt={this.props.photo.title}/>
                {this.state.editing
                ? (
                    <div>
                        <input className = 'inputField'
                            value={this.state.titleInput}
                            onChange ={e => this.handleInput(e.target.value)}/>
                        <button className='submitButton' onClick={() => this.handleEdit(this.props.photo.id)}>Submit</button>
                    </div>

                )
                : (
                    <div>
                        <p>{this.props.photo.title}</p>
                        <button className = 'editBtn' onClick={this.handleToggle}>Edit Photo Title</button>
                    </div>
                )}
                <button className='delBtn' onClick={() => this.props.deleteFn(this.props.photo.id)}>Delete Photo</button>
            </div>
        )
    }

}

export default Favorites;