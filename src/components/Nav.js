import React, {Component} from 'react';

export default class Nav extends Component{
  render(){
    return(
      <div id="top-bar">
        <div id="row" className='cell-2'>
            <div >Wolfgang A Criollo</div>
            <div className="nav-wrap">
              <nav>
                <ul id="nav">
                  <li>About</li>
                  <li>Resume</li>
                  <li>Contact</li>
                </ul>
              </nav>
            </div>
        </div>
      </div>
    )
  }
}
