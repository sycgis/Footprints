import React, { Component } from 'react';
import {Grid, Col, Row} from 'react-bootstrap';
import Webcam from 'react-webcam';
import dogPaw from '../../utils/assets/images/dogPaw.png';
import capture from '../../utils/assets/images/clickablePaw.png';
import "./Capture.css";
import API from '../../utils/API';
import { Link } from 'react-router-dom';
import WebCapture from '../WebCapture';
import axios from 'axios';
import PawLogo from "../../utils/assets/images/PawLogo.png"
import boneIcon from "../../utils/assets/images/bone.png"
 

   
class Capture extends Component {


  capture = () => {

    const success=banana=>{
      console.log(banana.coords);                              
     const newMedia = {
      // imgString:imageSrc,
      loc:{lat: banana.coords.latitude, lng: banana.coords.longitude, timestamp:banana.timestamp} ,
      token:localStorage.getItem("token")
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
      timeout: 5000,

    }
    console.log(WebCapture);
    const webcam = WebCapture.webcam;
    // const imageSrc = this.webcam.getScreenshot();
    navigator.geolocation.getCurrentPosition(success,err,options);
   

  }


  
   
getAll=()=>{
   const success=banana=>{
      console.log(banana.coords);                              
     const newMedia = {
      loc:{lat: banana.coords.latitude, lng: banana.coords.longitude, timestamp:banana.timestamp} ,
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

  render() {
    return (
            <div className ="container CapturePage">
            <nav className="navbar navbar-inverse">
                  <div className="navbar-header">
                    <img id="App-logo2" className="buttons" src={PawLogo} alt="Paw Logo"/>
                  </div>
            </nav>
             <div className ="row">
              <div className ="col-xs-12">
              <WebCapture />
            </div>
            </div> 
            <div className ="row mediaButtons">
                <div className ="col-xs-6">
                    <img src={boneIcon} className="buttons" id="myMedia"alt="myMedia Icon" onClick={this.getAll}/>
                </div>
                <div className ="col-xs-6" >
                <img src={capture} className="buttons" id="screenshot" alt= "geotagged Media" onClick={this.capture}
               />
                </div>
              </div>
  </div>
    )}
};
export default Capture;
