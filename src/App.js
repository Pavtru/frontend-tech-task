import React, { Component } from 'react';
import ReactDOM from "react-dom";
import logo from './logo.svg';
import './App.css';

class App extends Component {
constructor(){
  super();
   this.state = {gethdr: "Welcome to React"};
}
handleclick(gethdr){

}
  render() {
     
    return (
      
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title" onClick={this.handleclick.bind(this)}>{this.state.gethdr}</h1>
          
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
