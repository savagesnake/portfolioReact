import React, {Component} from 'react';
var $ = require('jquery')

export default class Nav extends Component{
  navToggle(){
    let nav = this.refs.nav;
    let posLeft = $(nav).position().left;
    if(posLeft < 0){
      $(nav).css({left:0});
    }else{
      $(nav).removeAttr("style");
    }
  }

  componentDidMount(){
    let nav = this.refs.smoothScroll;
    var $downArrow = $(".smoothScroll");
    var $topBar = $("#top-bar");
    var topBarHeight = $topBar.outerHeight();

      function smoothScroll(nav){
        $(nav).on("click",function(e){
          e.preventDefault();
          var $target = e.target;
          var scrollTo = $($target).attr('href');
          $('html,body').animate({
            scrollTop: $(scrollTo).offset().top
          },1000);
        });
      }

      $(window).scroll(function(){
        var positionY = $(this).scrollTop();
        if(topBarHeight < positionY){
          $topBar.css({backgroundColor:"#14141b",padding:"10px 24px"});
        }else(
          $topBar.removeAttr("style")
        );
      });

      smoothScroll(nav);
      smoothScroll($downArrow);

  }
  render(){
    return(
      <div id="top-bar">
        <div className="row">
            <div  className="col-sm-12 col-md-12 col-wd-6">
              <h1 className="logo smoothScroll"><a  href="#home">Wolfgang A Criollo</a></h1>
              <div className="nav-toggle">
              <i className="fa fa-bars fa-lg" ref="toggleNav" onClick={this.navToggle.bind(this)}></i>
              </div>
            </div>
            <div className="nav-wrap col-sm-12 col-md-12 col-wd-6">
              <nav id="nav" ref="nav">
                <div className="close-side"><i className="fa fa-times-circle fa-lg " ref="toggleNav" onClick={this.navToggle.bind(this)}></i></div>
                <ul ref="smoothScroll">
                  <li><a href="#about"><i className="fa fa-file-text-o side-nav-icon"></i> About</a></li>
                  <li><a href="#developer"><i className="fa fa-code-fork side-nav-icon"></i> Track Record</a></li>
                  <li><a href="#resume"><i className="fa fa-code side-nav-icon"></i> Resume</a></li>
                </ul>
              </nav>
            </div>
        </div>
      </div>
    )
  }
}
