import React, { Component } from 'react';
import API from '../../utils/API';
import { Link } from 'react-router-dom';
import PawLogo from '../../PawLogo.png';
import './Display.css';
import WebCapture from '../../components/multi-media/WebCapture';
import Webcam from 'react-webcam'
import interconnect2 from '../../interconnect2.jpg';
import logo22 from '../../logo22.jpg';
import yourMedia from '../../yourMedia.png';
import streetHD from '../../streetHD.jpg';
import interconnect812 from '../../interconnect812.jpg';
import microphone from '../../microphone.svg';
import interconnect3 from '../../interconnect3.jpg';
class Display extends Component {
  render() {
    return (
            <div >
             <nav className="navbar navbar-inverse">
                  <div className="navbar-header">
                    <img id="App-logo2" src={PawLogo} alt="Paw Logo"/>
                  </div>
              </nav>
         
          <div className="row">
              <div className="col-xs-4">
                <div className="thumbnail">
                    <img src={interconnect2} alt="paw">
                  </img>
              </div>
            </div>
              <div className="col-xs-4">
                <div className="thumbnail">
                    <img src={logo22} alt="paw">
                  </img>
                </div>
            </div>
              <div className="col-xs-4">
                <div className="thumbnail">
                    <img src={yourMedia} alt="paw">
                  </img>
              </div>
            </div>
          </div>
                <div className="row">
              <div className="col-xs-4">
                <div className="thumbnail">
                    <img src={streetHD} alt="paw">
                  </img>
              </div>
            </div>
              <div className="col-xs-4">
                <div className="thumbnail">
                    <img src={interconnect3} alt="paw">
                  </img>
                </div>
            </div>
              <div className="col-xs-4">
                <div className="thumbnail">
                    <img src={interconnect812} alt="paw">
                  </img>
              </div>
            </div>
          </div>      <div className="row">
              <div className="col-xs-4">
                <div className="thumbnail">
                    <img src={microphone} alt="paw">
                  </img>
              </div>
            </div>
              <div className="col-xs-4">
                <div className="thumbnail">
                    <img src={PawLogo} alt="paw">
                  </img>
                </div>
            </div>
              <div className="col-xs-4">
                <div className="thumbnail">
                    <img src={PawLogo} alt="paw">
                  </img>
              </div>
            </div>
          </div>      <div className="row">
              <div className="col-xs-4">
                <div className="thumbnail">
                    <img src={PawLogo} alt="paw">
                  </img>
              </div>
            </div>
              <div className="col-xs-4">
                <div className="thumbnail">
                    <img src={PawLogo} alt="paw">
                  </img>
                </div>
            </div>
              <div className="col-xs-4">
                <div className="thumbnail">
                    <img src={PawLogo} alt="paw">
                  </img>
              </div>
            </div>
          </div>
          <div className="row">
              <div className="col-xs-4">
                <div className="thumbnail">
                    <img src={PawLogo} alt="paw">
                  </img>
              </div>
            </div>
              <div className="col-xs-4">
                <div className="thumbnail">
                    <img src={PawLogo} alt="paw">
                  </img>
                </div>
            </div>
              <div className="col-xs-4">
                <div className="thumbnail">
                    <img src={PawLogo} alt="paw">
                  </img>
              </div>
            </div>
          </div>
</div>
    )}
};
export default Display;
