import React,{Component} from 'react';

export default class Resume extends Component{
  render(){
    return(
      <div>
        <header className="heading-panel-container">
            <h2 className="page-title">Resume</h2>
            <p>Flexitarian pork belly banh mi ethical, retro chartreuse hammock franzen locavore irony food truck kickstarter lo-fi shabby chic</p>
        </header>
        <article className="resume-panel">
          <div className="row">
            <div className="col-sm-12 col-md-4">
              <article>
                <img src="https://www.codewars.com/users/savagesnake/badges/large"/>
                <a className="btn md green round codepen-link" href="https://codepen.io/savagesnake/" target="_blank">MY C<i className="fa fa-codepen">DEPEN</i></a>
              </article>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className='image-holder'>
                image placeholder
              </div>
            </div>
            <div className="col-sm-12  col-md-4">col3</div>
          </div>
        </article>

    </div>
    );
  }
}
