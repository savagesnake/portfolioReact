import React,{Component} from 'react';
import Header from './components/Header';
import Nav from "./components/Nav";
import About from "./components/About";
import Developer from "./components/Developer";
require('../styles/styles.js');
require('normalize.css');
require('font-awesome-webpack');

export default class App extends Component{
  render(){
    return(
      <div id="main">
        <header id="home">
          <Nav />
          <Header />
        </header>
        <section id="about">
          <About />
        </section>
        <section id="developer">
          <Developer  />
        </section>
      </div>
    );
  }
}
