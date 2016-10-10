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
        <div id="row" className='cell-2'>
            <div >Wolfgang A Criollo</div>
            <div className="nav-wrap">
              <nav id="nav" ref="mobileNav">
                <ul>
                  <li>About</li>
                  <li>Resume</li>
                  <li>Contact</li>
                </ul>
              </nav>
            </div>
            <div className="nav-toggle">
              <i className="fa fa-bars fa-lg" ref="toggleNav" onClick={this.navToggle.bind(this)}></i>
            </div>
        </div>
      </div>
    )
  }
}
