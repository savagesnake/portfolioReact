import React,{Component} from 'react';
import Header from './components/header';
require('../styles/styles.js');
export default class App extends Component{
  render(){
    return(
      <div id="main">
        <Header />
      </div>
    );
  }
}
