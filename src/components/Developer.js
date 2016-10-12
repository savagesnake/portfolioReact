import React,{Component} from 'react'

export default class Developer extends Component{
  render(){
    return(
      <div className='developer-bg'>
      <div className="contain">
          <header className="heading-panel-container">
            <h2 className="page-title">Front-End DEveloper</h2>
            <p>Front-end developer with styling + markup lenguage experience and JavaScript frameworks</p>
          </header>
        <div className="content">
          <article className="tool-box">
            <div id="row" className="cell-3">
              <div >
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
              </div>
              <div></div>
              <div></div>
            </div>
          </article>
        </div>
        </div>
      </div>
    )
  }
}
