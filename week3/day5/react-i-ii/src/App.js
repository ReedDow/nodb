import React, {Component} from 'react'
import './App.css'
import { render } from '@testing-library/react'
import Header from './Components/Header'
import data from './Components/data'
import MainContent from './Components/MainContent'
// import MainContent from './Components/MainContent'

class App extends Component{
    constructor(props){
    super(props);
    
    }
  

  render(){
  return(
    <div>
      <Header />
      <MainContent />
    </div>

  )
  }
}

export default App;