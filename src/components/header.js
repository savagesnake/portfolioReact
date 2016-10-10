import React, {Component}  from 'react';
var iconLogo = require("../../public/images/wolfgangIcon.png");
import headerHeight from '../scripts/header.js';

export default class Header extends Component{
  componentDidMount(){
  headerHeight();
  }
  render(){
    return(
      <div className="header-wrap header-bg">
        <div className="header-inner-wrap">
          <div className="header-content">
          <img  className="icon" src={iconLogo} alt="wolfgang Criollo"/>
          <h1>My name is Wolfgang A Criollo</h1>
          <h2>I'm a webdesigner & developer</h2>
          <p>portfolio under construction</p>
          <ul className="inline-list">
          <li>
            <a href="https://github.com/savagesnake" target="_target" alt="github">
            <i className="fa fa-github fa-2x social-link" ></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/wolfgangamadeus" target="_target" alt="linkedin">
            <i className="fa fa-linkedin fa-2x social-link"></i>
            </a>
          </li>
          </ul>
          </div>
          <i id="scroll-arrow" className="fa fa-angle-down fa-3x"></i>
        </div>
      </div>
    )
  }
}
