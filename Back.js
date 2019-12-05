import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron } from 'reactstrap';
const Back=()=>{
    return(
        <div>
            <div style={{float:"right"}}><button class="btn btn-primary" >Add your feed back</button></div><br></br><br></br>
            <div class="row">
              
                <div class="col-xl-4">
                <Jumbotron>
                        <img src="https://spiritualityhealth.com/assets/images/Articles/_articleSummaryImage/Affirmations-to-sooth-Nervous-Flyers.jpg" height="400" width="500"></img><br></br>
                        <h1>imagination.Co</h1>
                        <span>create page@user name</span><br></br><br></br>
                        <b>HOME</b><br></br><br></br>
                        <b>POST</b><br></br><br></br>
                        <b>REVIEWS</b><br></br><br></br>
                        <b>Manage Promotion</b><br></br><br></br>
                        <b>See More</b><br></br><br></br>
                        <button class="btn btn-primary">Promote</button>

                </Jumbotron>
                </div>
                <div class="col-xl-8">
                <span  style={{float:"right", color:"blue"}}><img src="  https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/edit-128.png" width="20" height="20"></img>Edit page info</span>
              
                <h1 >About</h1>
                    <div class="row">
                    <div class="col-xl-6">
                   
                    <h4 style={{color:"Gray"}}>Gentral</h4> 
                    <hr></hr>
                    <h6 style={{color:"Gray"}}>Name</h6> <br></br>
                    <h6 style={{color:"Gray"}}>UserName</h6> <br></br>
                    <h4 style={{color:"Gray"}}>BUSINESS INFO</h4>
                    <hr></hr>
                    <span style={{color:"Blue"}}><img src="https://cdn0.iconfinder.com/data/icons/entypo/92/i9-128.png" width="30" height="30"></img>+ Edit business details</span><br></br><br></br>
                    <span style={{color:"Blue"}}><img src="https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/calendar-128.png" width="30" height="30"></img> +  Edit start date</span><br></br><br></br>
                    <span ><img src="https://cdn0.iconfinder.com/data/icons/entypo/92/i9-128.png" width="30" height="30"></img>Edit business types</span><br></br><br></br>  
                    <h4 style={{color:"Gray"}}>Contact Info</h4>
                    <hr></hr> 
                    <span style={{color:"Darkblue"}}><img src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_settings_phone_48px-128.png" width="50" height="50"></img>+ Enter phone number</span><br></br><br></br>
                    <span  style={{color:"Darkblue"}}><img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-email-128.png" width="50" height="50"></img>+ Enter your email</span><br></br><br></br>
                    <span style={{color:"Darkblue"}}><img src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/globe-128.png" width="50" height="50"></img>+ Enter Website</span><br></br><br></br>
                    <span style={{color:"Darkblue"}}><img src="https://cdn2.iconfinder.com/data/icons/picol-vector/32/notes_edit-128.png" width="50" height="50"></img>+ Edit another account</span><br></br><br></br>
                    <h4 style={{color:"Gray"}}>More Info</h4>
                    <hr></hr>
                    <span>About</span>
                    

                        </div>
                        <div class="col-xl-6">
                            <h4 style={{color:"Gray"}}>Story</h4>
                            <hr></hr>
                            <img src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/tnc_69881045.jpg?crop=240,0,2400,1320&wid=4000&hei=2200&scl=0.6" width="600" height="300"></img>
                            <figcaption>Our Story</figcaption><br></br>
                            <span style={{color:"Blue"}}>+ Tell people about your business</span><br></br><br></br>
                            <hr></hr>
                            <h4 style={{color:"Gray"}}>Team members</h4> 
                            <hr></hr>
                            <span>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span><br></br><br></br>
                            <span style={{color:"Blue"}}>Add your self as a team member</span><br></br><br></br>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}
export default Back;