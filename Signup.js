import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron } from 'reactstrap';

const Signup = () => {
    const [firstname, setFirst] = React.useState("")
    const [lastname, setLast] = React.useState("")
    const [Email, setEmail] = React.useState("")
    const [password, setpass] = React.useState("")
    
    const firstName = (argument1) => {
        setFirst(argument1.target.value);
    }
    const lastName = (argument2) => {
        setLast(argument2.target.value);
    }
    const email = (argument3) => {
        setEmail(argument3.target.value);
    }
    const passWord = (argument4) => {
        setpass(argument4.target.value);
    }
    const but = () => {
        const nameRegex = "^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$"
      

        if ((firstname.match(nameRegex) && lastname.match(nameRegex)) && (Email==="" && passWord===""))
        {
            alert("Fill your details properly")
        }
        else if((firstname==="" && lastname==="")||(Email==="" && passWord==="" ))
        {
            alert("field is empty")
        }
        else if(firstname.match(nameRegex) && lastname.match(nameRegex)||(Email.match(nameRegex)&&passWord.match(nameRegex)))
        {
            alert("Registered successfully")
        }
    }





    return (
        <div>
            <Jumbotron>
            <div  class="navbar navbar-dark bg-primary" >                        
            <h1 style={{ color: "white", margin:"auto",padding:"auto" }}>facebook clone</h1>
            </div>


           


    <div class="row">
        <div class="col-xl-6">

            <div></div><br></br><br></br><br></br>
            <h2>connect with friends and the <br></br>world around you on Facebook...</h2><br></br><br></br>
            <div class="row">
            <div class="col-xl-2">
                
                <img src="https://cdn0.iconfinder.com/data/icons/citycons/150/Citycons_newspaper-128.png" height="100" width="100"/>
                <img src="https://cdn2.iconfinder.com/data/icons/pittogrammi/142/01-128.png" height="100" width="100"/>
                <img src="https://cdn1.iconfinder.com/data/icons/free-98-icons/32/search-128.png" height="70" width="100"/>
            </div>
                <div class="col-xl-4">
            <p><b>see photos and updates</b>from friends in new Feed</p><br></br><br></br>
            <p><b>see Whats new </b>in your life on timeline</p><br></br><br></br>
            <p><b>find more </b>of what you're looking for with Graph Search</p><br></br>
            </div>
            </div>
            
            <div><img src="https://www.indracompany.com/sites/default/files/tablet_blogneo_2.png" height="300" width="700"/></div>
        </div>
        <div class="col-xl-6">
            <h1>Sign Up</h1>
            <div>It's free and always will be.</div><br></br>
            <div class="row">

                <div class="col-xl-3">
                    <input type="text" placeholder="First Name" onChange={firstName}></input>

                </div>
                <div class="col-xl-3">
                    <input type="text" placeholder="Last Name" onChange={lastName}></input>
                </div>
            </div><br></br>
            <textarea placeholder="Email or Mobile Number" rows="-50" cols="57" onChange={email}></textarea><br></br>
            <textarea placeholder="Re-Enter Email or Mobile Number" rows="-50" cols="57" onChange={email}></textarea><br></br>
            <textarea type="password" placeholder="New password" rows="-50" cols="57" onChange={passWord}></textarea>
            <h4>Birth Day</h4>
            <input type="date" name="bday"></input><br></br><br></br>
            <input type="radio" name="gender" value="Female" checked></input> Female
                <input type="radio" name="gender" value="Male"></input> Male
                <input type="radio" name="gender" value="other"></input> Other <br></br><br></br>
            <h6>There are many variations of passages of Lorem Ipsum available, but the majority, or randomised<br></br> words which don't look even slightly believable.</h6>
            <button type="button" class="btn btn-success" onClick={but}>Sign Up</button>
             
        </div>
    </div>
    </Jumbotron>
        </div >
    )
}


export default Signup;