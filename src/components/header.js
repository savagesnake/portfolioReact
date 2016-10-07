import React, {Component}  from 'react';

export default class Header extends Component{
  render(){
    return(
      <div className="header-wrap header-bg">
        <div className="header-inner-wrap">
          <div className="header-content">
          <img  className="icon" src="../public/images/wolfgangIcon.png" alt="wolfgang Criollo"/>
          <h1>My name is Wolfgang A Criollo</h1>
          <h2>I'm a webdesigner & developer</h2>
          </div>
        </div>
      </div>
    )
  }
}
