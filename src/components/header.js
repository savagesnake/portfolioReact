import React, {Component}  from 'react';

export default class Header extends Component{
  render(){
    return(
      <div className="header-wrap header-bg">
        <div className="header-content">
        <img  className="icon" src="../public/images/wolfgangIcon.png" alt="wolfgang Criollo"/>
        <h1>Header Section!!</h1>
        </div>
      </div>
    )
  }
}
