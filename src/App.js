import React,{Component} from 'react';
import Header from './components/Header';
import Nav from "./components/Nav"
require('../styles/styles.js');
require('normalize.css');
export default class App extends Component{
  render(){
    return(
      <div id="main">
        <header>
          <Nav />
          <Header />
        </header>
      </div>
    );
  }
}
