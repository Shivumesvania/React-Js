import React from "react";
import {BrowserRouter as Router , Link, Route ,Routes} from 'react-router-dom';
import home from "./home";
import about from "./about";

class App extends React.Component{
   constructor(){
    super();
    this.state = {
      count : 0
    }
   }

   btnClick()
   {
    this.setState({
      count: this.state.count + 1
    })
   }

   render(){
     return(
      <div> 
      <Router>
        
          <ul>
            <li>
              <Link to={'/'}>home</Link>
            </li>

            <li>
              <Link to={'/about'}>about</Link>
            </li>
          </ul>
        <switch>
          <Routes exact path='/' Component= {home}/> 
          <Routes exact path='/about' Component= {about}/> 
        </switch>
      </Router>
      </div>
     )
   }


}

export default App;
