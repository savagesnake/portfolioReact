import React,{Component} from "react";
let  profilePic = require("../../public/images/profileImage.jpg")

export default class About extends Component{
  render(){
    return(
        <div className="content">
          <h1 className="page-title">About Me</h1>
          <div id="row" className="cell-1">
            <div className="lead">
            <img className="profilePic" src={profilePic} alt="profile-image" title="Wolfgang Criollo"/>
                <p>
                Love CSS, making websites presentable is my passion, adding functionality with javascript, Jquery to bring it to live just makes my day
                I started with interest in 3D design after
                my undergraduate, I started to focus more
                in graphic and web design and after working for 3yr as a web designer
                I realise that front-end is my passion, I desided to attend Devbootcamp to get upto date with technology and become a fullstack developer but focusing on frond-end-development
                </p>
            </div>
          </div>

        </div>
    )
  }
}
