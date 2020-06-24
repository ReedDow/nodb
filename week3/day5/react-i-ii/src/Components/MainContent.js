import React, {Component} from 'react';
import data from './data';

class MainContent extends Component{
    constructor(prop){
    super(prop);
    this.state = {
        employees: data,
        index: 0   
    }   
}

handleIncrement = () => {
    if(this.state.index !== this.state.employees.length-1){
    this.setState({index: this.state.index + 1})
    }
}
handleDecrement = () => {
    if(this.state.index !== 0){
    this.setState({index: this.state.index - 1})
    
    }
}

    render(){
        console.log(this.state.employees)
        const {employees, index} = this.state
    return(
        
                <main>
                    <content>
                        <p>
                        <div className = 'name'>{`${employees[index].name.first} ${employees[index].name.last}`}</div>
                        <container></container>
                        <page>{`${employees[index].id}/${employees.length}`}</page>
                        <h4><b>From:</b> {`${employees[index].city}, ${employees[index].country}`}</h4>
                        <h4><b>Job Title:</b> {`${employees[index].title}`}</h4>
                        <h4><b>Employer:</b> {`${employees[index].employer}`}</h4>
                        <h4><b>Favorite Movies:</b>
                            <h5>1. {`${employees[index].favoriteMovies[0]}`} </h5>
                            <h5>2. {`${employees[index].favoriteMovies[1]}`} </h5>
                            <h5>3. {`${employees[index].favoriteMovies[2]}`} </h5>
                        </h4>
                        </p>
                        <button className = 'btn1' onClick={this.handleDecrement}> Previous</button>
                        <button className = 'btn2' onClick = {this.handleIncrement}>Next</button>
                    </content>
                    
            </main>
    )
    }
}
    


export default MainContent