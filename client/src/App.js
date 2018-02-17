import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch,Redirect } from "react-router-dom";
// import {Grid, Row, Col} from 'react-boostrap';
import { CSS, Grid, Row, Col } from "react-bootstrap";
import logo from "./logo.svg";
import "./App.css";
// import Photo from './components/Pages/Photo';
import Nav from "./components/Nav";
import Login from "./Pages/Login";

// import Logo from "./components/Logo";
import WebCapture from "./Pages/WebCapture";
import react from "react-router-dom";
import MediaDisplay from "./Pages/MediaDisplay";
import Capture from "./Pages/Capture"


class App extends Component {

state={
  redirect:false
}

  render() {
  
    return (

      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/Capture" component={WebCapture} />
          <Route exact path="/Display" component={MediaDisplay} />
        </Switch>
      </Router>
    );
  }
}


export default App;

