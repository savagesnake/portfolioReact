import React, {Component}  from 'react';
import header from "../scripts/header.js";
var iconLogo = require("../../public/images/wolfgangIcon.png");

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
          </div>
        </div>
      </div>
    )
  }
}
