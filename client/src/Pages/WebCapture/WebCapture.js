import React from 'react';
import $ from "jquery";
import {Grid, Col, Row} from 'react-bootstrap';
import Webcam from 'react-webcam';
import axios from "axios";
import PawLogo from "../../utils/assets/images/PawLogo.png"
import boneIcon from "../../utils/assets/images/bone.png"
 import dogPaw from '../../utils/assets/images/dogPaw.png';
import capture from '../../utils/assets/images/clickablePaw.png';




class WebCapture extends React.Component {
  setRef = (webcam) => {
    this.webcam = webcam;
  }

capture = () => {

    const success=banana=>{
      console.log(banana.coords);                              
     const newMedia = {
      imgString:imageSrc,
      loc:{
        lat: banana.coords.latitude, 
        lng: banana.coords.longitude, 
        timestamp:banana.timestamp
      },
        username:localStorage.getItem("username")
    };
    console.log(newMedia);
    axios.post("/api/media", newMedia, function (req,res){

      console.log(res);
     // this.props.history.push("/display");
    });  

    };

    const err = err=>{
      console.log(err);
    };

    const options = {
      enableHighAccuracy:true,
      timeout: 7000,

    }

    const imageSrc = this.webcam.getScreenshot();
    navigator.geolocation.getCurrentPosition(success,err,options);
   

  }
 
getAll=()=>{
   const success=banana=>{
      console.log(banana.coords);                              
     const newMedia = {
      loc:{
        lat: banana.coords.latitude, 
        lng: banana.coords.longitude,
        timestamp:banana.timestamp},
        token:localStorage.getItem("token")
    };
    console.log(newMedia);
    
    axios.post("/api/loc/media", newMedia, function (req,res){
      console.log(res);
      //this.props.history.push("/display");
    });  
    };

    const err = err=>{
      console.log(err);
    };

    const options = {
      enableHighAccuracy:true,
      timeout: 5000,

    };

    navigator.geolocation.getCurrentPosition(success,err,options);
    // const userToken = this.readCookie("authToken");
    // console.log(userToken);
    
  }

 
   
 

render(){
return (
  <div className ="container CapturePage">
    <nav className="navbar navbar-inverse">
          <div className="navbar-header">
            <img id="App-logo2" className="buttons" src={PawLogo} alt="Paw Logo"/>
          </div>
    </nav>
   <div className ="row">
      <div className ="col-xs-12">
        <Row around="xs">
          <Col xs={12}>
            <Webcam
              id="webcam"
              audio={false}
              height={"100%"}
              ref={this.setRef}
              screenshotFormat="image/jpeg"
              width={"100%"}
              />
            </Col>
        </Row>
  </div>
  </div>
  <div className ="row mediaButtons">
    <div className ="col-xs-6">
        <img src={boneIcon} className="buttons" id="myMedia"alt="local Media" onClick={this.getAll}/>
    </div>
    <div className ="col-xs-6" >
    <img src={capture} className="buttons" id="screenshot" alt= "get screenshot Media" onClick={this.capture}
   />
    </div>
  </div>
  </div>

    );  
  }
}

export default WebCapture;

