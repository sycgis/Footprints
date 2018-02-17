import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import Img from 'react-image';
import ImageGallery from 'react-image-gallery';


class MediaDisplay extends Component{

	state={
		images: []
	}

componentWillMount=()=>{
	console.log("mounting");
	this.loadImages();
}

loadImages=()=>{
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
    
    axios.post("/api/loc/media", newMedia)
    	.then( res=>{
      console.log(res.data);
      let newArr=res.data.map(x=>{
      	return {original:x.url}
      });
      console.log(newArr);
      this.setState({
      	images:newArr
      })
    })
    .catch(err=>{
    	console.log(err);
    })  
    };

    const err = err=>{
      console.log(err);
    };

    const options = {
      enableHighAccuracy:true,
      timeout: 5000,

    };

    navigator.geolocation.getCurrentPosition(success,err,options);
}



	render(){
		return (
			<div>
				<ImageGallery items={this.state.images} />
			</div>
		)
	}
}

export default MediaDisplay;