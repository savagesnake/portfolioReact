import React,{Component} from 'react';
let  profilePic = require("../../public/images/profileImage.jpg");
let resumeImg = require('../../public/images/resume-image.png');

export default class Resume extends Component{
  render(){
    return(
      <div>

          <header className="heading-panel-container">
            <h2 className="page-title">Resume</h2>
          </header>
        <div className="content">
          <article className="resume-panel">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-wd-3">
                <article className="tool-box">
                  <h3>Web Development Toolbox</h3>
                  <ul>
                  <li><i className="dev-icon devicon-html5-plain"></i> <span>HTML</span></li>
                  <li><i className="dev-icon devicon-css3-plain"></i> <span>CSS, Sass</span></li>
                    <li><i className="dev-icon devicon-javascript-plain"></i> <span>JavaScript</span></li>
                    <li><i className="dev-icon devicon-jquery-plain"></i> <span>jQuery</span></li>
                    <li><i className="dev-icon devicon-react-original"></i> <span>React.js</span></li>
                    <li><i className="dev-icon devicon-ruby-plain"></i> <span>Ruby</span></li>
                    <li><i className="dev-icon devicon-rails-plain"></i> <span>Ruby on Rails</span></li>
                    <li><i className="dev-icon devicon-git-plain"></i> <span>Git</span></li>
                  </ul>
                  <h3>Software</h3>
                  <ul>
                    <li><i className="dev-icon devicon-photoshop-plain"></i> Photoshop</li>
                  </ul>
                </article>
                  </div>
                  <div className="col-sm-12 col-md-12 col-wd-6">
                    <div className="resume-wrap">
                      <img id="resume-img" src={resumeImg}/>
                    </div>
                  </div>
                  <div className="col-sm-12  col-md-12 col-wd-3">
                    <img src="https://www.codewars.com/users/savagesnake/badges/micro"/>
                    <article className="user-card">

                      <div className="card-id">
                        <img className="card-image" src={profilePic}/> <p>Wolfgang Criollo<br/>
                          Fullstack Developer</p>
                      </div>
                      <div className="card-info">
                        <p>I'm a determined individual that loves developing websites.<br />
                        self-taught most of the my many skills and improved them by attending to college and other tech schools.
                      </p>
                      <p>
                        While working as a web designer for 3yrs I have found my real passion in front-end development at the moment I'm focusing strengthening my skills on the many different frameworks that are out there.
                        </p>
                        <p>
                        currently looking for opportunities to work at a place that is centered around working as a team and that allows everyone’s talents to flourish, I find that I work best in an environment that is empowering and positive.</p>
                      </div>
                      </article>
                      <div className="code-networks">
                        <a className="btn md dark-gray round codepen-link" href="https://codepen.io/savagesnake/" target="_blank">VIEW C<i className="fa fa-codepen">DEPEN</i></a>
                      </div>
                    </div>
                </div>
              </article>
        </div>
      </div>
    );
  }
}
