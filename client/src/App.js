import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch,Redirect } from "react-router-dom";
// import {Grid, Row, Col} from 'react-boostrap';
// import logo from "./logo.svg";
import "./App.css";
import Login from "./Pages/Login";

import WebCapture from "./Pages/WebCapture";
// import react from "react-router-dom";
import MediaDisplay from "./Pages/MediaDisplay";


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

