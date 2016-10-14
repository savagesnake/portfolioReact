import React,{Component} from "react";
let  profilePic = require("../../public/images/profileImage.jpg")

export default class About extends Component{
  render(){
    return(
        <div className="content">
        <header>
        <h2 className="page-title">About</h2>
        </header>
          <div className="row" >
            <div className="col-wd-12">
              <div className="lead">
              <img className="profilePic" src={profilePic} alt="profile-image" title="Wolfgang Criollo"/>
                  <p>
                  I'm a determined individual  that loves developing websites.
                  I self-thought myself most of  the many skills I have and have improved those skills by attending to college and other tech schools.
                  after many years I have found my real passion in front-end development at the moment I'm focusing  strengthening my skills on the many different frameworks that are out there,
                  currently  looking for opportunities to work at a place that will allow my skill to grow, I'm always looking to challenge myself.
                  </p>
              </div>
            </div>
          </div>
        </div>
    )
  }
}
