
import React from 'react';
import Axios from 'axios';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Post = () => {
    const [post, setPost] = React.useState("");
    const [list, setList] = React.useState([]);
    const [count1, setCount] = React.useState(0)
    const [dis, setDis] = React.useState(0)
    // const [likes, setLikes] = React.useState([]);
    var sum = 0;
    var dec = 100;




    React.useEffect(() => {
        getting();
    }, [])

    const getting = () => {
        console.log("hello")
        Axios.get("http://localhost:8000/POST").then(result => {
            setList(result.data)
        });
    }
    const putPost = (post) => {
        console.log("hi");
        Axios.post("http://localhost:8000/POST", { content: post }).then(success => {
            getting()
            setList([...list, success.data])
            setPost("")

        }).catch(err => {
            console.log(err);
        })
    }
    const deletePost = (id1) => {
        Axios.delete("http://localhost:8000/POST/" + id1).then(value => {
            getting();
            if (value.status === "200" && value.settext === "OK") {
                setList([list.filter(i => i.id !== id1)])
                console.log("ruby");
            }
        })
    }

    // const fetch = () =>{Axios
    //         .get("http://localhost:8000/like")
    //         .then(res => res.data)
    //         .then(setLikes)
    //         .catch(err => console.log(err));
    //     }
    const count = () => {
        setCount(sum++);
    }
    const disLike = () => {
        setDis(dec--);
    }

    return (
        <div>

            <div class="topnav" class="navbar navbar-dark bg-primary">
                <div class="col-xl-6">
                    <img src="https://cdn0.iconfinder.com/data/icons/eon-social-media-contact-info-2/32/facebook_fb_face_book-128.png" height="60" width="60" />
                    <input type="text" id="in" placeholder="search..." className="float center"></input>
                </div>
                <div class="col-xl-6">
                </div>
            </div>

            <div>
                <div class="row" style={{ backgroundColor: "aqua" }}>
                   
                    <div class="col-6" style={{display: "inline-block"}}>
                        <h2 style={{ ['padding-top']: "89px",['padding - left']: "110px",['padding - right']: "510px" }}><i>POST YOUR MOMENT.............</i></h2>
                    </div>
                    <div class="col-6">
                        <label><b><br></br>*.F.MARY STELLIN<br></br>*.programmer trainee<br></br>*.Integra</b></label>

                        <img src="https://cdn4.iconfinder.com/data/icons/avatar-vol-1-3/512/10-128.png" width="100" height="100" ></img>
                        <label><b>Home</b></label>
                        <img src="https://cdn2.iconfinder.com/data/icons/people-80/96/Picture10-128.png" width="100" height="100" ></img>

                        <label><b>message</b></label>
                        <img src="https://cdn3.iconfinder.com/data/icons/message-and-communication-sets/50/Icon_One_Chat_Message-128.png" width="100" height="100" ></img>
                        <label><b>internet</b></label>
                        <img src="https://cdn3.iconfinder.com/data/icons/tango-icon-library/48/applications-internet-128.png" width="100" height="100" ></img>
                        <label><b>setting</b></label>
                        <img src="https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/settings-128.png" width="80" height="80" ></img>
                        {/* <label><b>Drop Down</b></label>
            <img src="https://cdn1.iconfinder.com/data/icons/material-core/10/arrow-drop-down-128.png" width="50" height="50" ></img> */}
                    
                    </div>
                </div>
            </div>
            <div class="jumbotron jumbotron-fluid" style={{ backgroundColor: "" }}>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <div class="row">
                    <div class="col-xl-4"></div>
                    <div class="col-xl-4">
                        <table class="table table-striped">
                            <tr>
                                <td style={{ color: "BLACK" }}><img src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/edit-128.png" width="40" height="40"></img><b>COMMENT</b></td>
                                <td style={{ color: "BLACK" }}><img src="https://cdn2.iconfinder.com/data/icons/bagbox/png/Album-photo.png" width="40" height="40"></img><b>PHOTO VIDEO ALBUM</b></td>
                                <td style={{ color: "BLACK" }}><img src="https://cdn2.iconfinder.com/data/icons/picol-vector/32/video_settings-128.png" width="40" height="40"></img><b>LIVE VIDEO</b></td>
                            </tr>
                        </table>
                    </div>
                    <div class="col-xl-4"></div>
                </div>

                <div>
                    <center></center>

                </div>

                <center><textarea type="text" rows="5" cols="80" placeholder="Write something here..." onChange={e => setPost(e.target.value)} value={post}></textarea></center><br></br>
                <center><Button onClick={() => putPost(post)} >POST TO FACEBOOK</Button></center><br></br>
                <ul className="list-group" >
                    {
                        list.map((i) => {
                            return (
                                <ul key={i.id-1}>
                                    <center> <li class="list-group-item" ><b>{i.content}</b></li></center>
                                    {/* <button className="float-right" class="btn btn-warning" onClick={() => deletePost(i.id)}>delete</button> */}
                                    <span style={{ color: "yellow" }}><img src="https://cdn3.iconfinder.com/data/icons/streamline-icon-set-free-pack/48/Streamline-70-128.png" width="50" height="50" onClick={() => deletePost(i.id)} ></img></span>

                                    <span onClick={count}><img src="https://cdn4.iconfinder.com/data/icons/48-bubbles/48/33.Thumbs-Up-256.png" width="50" height="50" /> </span>

                                    <span>{count1}</span>
                                    <span onClick={disLike}> <img src="https://cdn4.iconfinder.com/data/icons/48-bubbles/48/34.Thumbs-Down-128.png" width="50" height="50" /></span>

                                    <span>{dis}</span>
                                    <span><img src="https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_screen_share_48px-128.png" width="50" height="50"></img></span>
                                    <input type="file" name="myFile"></input>
                                </ul>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}
export default Post;
