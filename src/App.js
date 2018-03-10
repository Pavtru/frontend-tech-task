import React, { Component } from 'react';
import ReactDOM from "react-dom";
import logo from './logo.svg';
import './App.css';

class App extends Component {
constructor(){
  super();

   this.state = {gethdr: "Welcome to React"};
}
handleclick(){
  var col1 = "black";
  var col2 = "blue";
 if (this.state.color != "black"){
   this.setState({color: col1});
 }
 else
 {
    this.setState({color: col2});
 }
 
  
  
 
 
}
  render() {
     
    return (
      
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title" style={{color: this.state.color}} onClick={this.handleclick.bind(this)}>{this.state.gethdr}</h1>
          
        </header>
        <input />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
