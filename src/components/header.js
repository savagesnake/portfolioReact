import React, {Component}  from 'react';
var iconLogo = require("../../public/images/wolfgangIcon.png");
import headerHeight from '../scripts/header.js';


export default class Header extends Component{
  componentDidMount(){
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
          <div>
          <a className="sprite sprite-linkedin-logo" href="https://www.linkedin.com/in/wolfgangamadeus
" target="_target" alt="linkedin"></a>
          </div>

          </div>
        </div>
      </div>
    )
  }
}
