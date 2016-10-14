import React, {Component} from 'react';
var $ = require('jquery')

export default class Nav extends Component{
  navToggle(){
    let nav = this.refs.mobileNav;
    let navToggleBtn = this.refs.mobileNav;
    $(nav).toggle();
  }

  render(){
    return(
      <div id="top-bar">
        <div className="row">
            <div  className="col-wd-6">Wolfgang A Criollo</div>
            <div className="nav-wrap col-wd-6">
              <nav id="nav" ref="mobileNav">
                <ul>
                  <li>About</li>
                  <li>Resume</li>
                  <li>Contact</li>
                </ul>
              </nav>
            </div>
        </div>
        <div className="nav-toggle">
        <i className="fa fa-bars fa-lg" ref="toggleNav" onClick={this.navToggle.bind(this)}></i>
        </div>
      </div>
    )
  }
}
