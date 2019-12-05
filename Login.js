

import React from 'react';
//import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Button } from 'reactstrap';
import Post from './Post'
import Signup from './Signup'
// import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";




const Login = () => {
  const [email, setEmail] = React.useState("");
  const [PassWord, setPassword] = React.useState("");
  const [form, setForm] = React.useState("false");
  const [form1, setForm1] = React.useState("ruby");
 
  
  const userName = (argument1) => {
    setEmail(argument1.target.value)
  }
  const Pass = (argument2) => {
    setPassword(argument2.target.value)
  }

  const login = () => {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexPassword = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})";
    ///^a-zA-Z0-9$/;

    if (email === "" && PassWord === "") {
      alert("Enter your email and password");
    }
    else if (regexEmail.test(email) && PassWord === "") {
      alert("should be delare your password");
    }
    else if (email.match(regexEmail) && PassWord.match(regexPassword)) {
        setForm("true")
      alert("success");
   
     
    }
}
    const log1=()=>{
      return(
    
      <div>
<Jumbotron>
        <div style={{ backgroundColor: "darkblue" }} ><center style={{ color: 'white' }}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</center></div>
        <div class="navbar navbar-dark bg-primary">
          <h1 style={{ color: 'white' }}>facebook clone</h1>
          <Button className="float right" color="success" a href="http://localhost:3000/users">SignUp</Button>
        </div>
        <div class="jumbotron jumbotron-fluid">

          <div class="container">
            <center><input type="userName" className="demo1" class="form-control" aria-describedby="passwordHelpBlock" placeholder="Email OR PhoneNumber" onChange={userName}></input></center><br></br>
            <center><input type="password" className="demo2" class="form-control" aria-describedby="passwordHelpBlock" placeholder="PassWord" onChange={Pass}></input></center><br></br>
            <center><textarea rows="-20" cols="70" input type="button" className="log" class="btn btn-primary"  onClick={()=>login(email,PassWord)}>log in</textarea></center><br></br>

          
            <center><div rows="-5" cols="60">forgotton account? - SignUp for facebook</div></center>
            <center><div rows="-5" cols="10">Not Now</div></center><br></br>
          </div><br></br>
          <div id="message" style={{color:"blue"}}>
          <center> <h3>Password must contain the following:</h3>
            <p><b>A lowercase letter</b></p>
            <p><b>A capital letter</b></p>
            <p><b>A number</b></p>
            <p><b>A Special character</b></p>
            <p><b>Minimum 8 characters</b></p></center>
          </div>
        </div>
      </Jumbotron>      
      </div>
      )
    }
  return(
      <div>
          {
          form==="true"?<Post/>:(log1())
        }
        {/* {
             onClick={ () => { setForm1("form") } }
            form1==="ruby"?("hi"):<Signup/>
        } */}
    </div>
      
      )

}

export default Login;
 {/*  <Link to="/about"><b>Login</b></Link>
      <Switch>
          <Route path="/about">
            <Post />
          </Route>
          </Switch> */}