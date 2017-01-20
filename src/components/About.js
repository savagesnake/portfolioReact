import React,{Component} from "react";
let  profilePic = require("../../public/images/profileImage.jpg")

export default class About extends Component{
  render(){
    return(
        <div className="contain content">
        <header className="heading-panel-container small">
        <h2 className="page-title">About</h2>
        </header>
          <div className="row" >
            <div className="col-wd-12">
              <div className="lead">
              <img className="profilePic" src={profilePic} alt="profile-image" title="Wolfgang Criollo"/>
                  <p>
                  I'm a determined individual that loves developing websites.<br/>
I self-taught most of the my many skills and improved them by attending to college and other tech schools.
                  </p>
                  <p>Have worked as a web designer for 3yrs during this years I have found my real passion in front-end development at the moment I'm focusing strengthening my skills on the many different frameworks that are out there.</p>
                  <p>currently looking for opportunities to work at a place that is centered around working as a team and that allows everyone’s talents to flourish,I find that I work best in an environment that is empowering and positive.</p>
              </div>
            </div>
          </div>
        </div>
    )
  }
}
