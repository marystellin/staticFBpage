import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Post from './Post';
import Login from './Login';
import Signup from './Signup';
import Back from './Back';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

const App=()=>{
  return(
    <div>
       <Router>
      <div style={{backgroundColor:"pink"}}float="right">
        <nav ><div className="Container">
          <div className="row">
            <div className="col-9" ></div>
            <div className="col-3">
                  
                    
                      <button className="col-3"><Link to="/Login"><b>Login</b></Link></button>
                    
                   
                     <button className="col-3"> <Link to="/about"><b>Post</b></Link></button>
           
                     <button className="col-3"><Link to="/users"><b>Signup</b></Link></button>
                   
                     <button className="col-3"><Link to="/Back"><b>About</b></Link></button>
                  
                  </div>
          </div>
        </div>
          
        </nav>
        </div>
        <Switch>
          <Route path="/about">
            <Post />
          </Route>
          <Route path="/users">
            <Signup />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Back">
            <Back />
          </Route>
        </Switch>
  
    </Router>
    </div>
  )
  
}
export default App;
