import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
constructor(){
  super();
   this.state = {gethdr: "Welcome to React"};
   
}

fetchfn(col2,col3){
  fetch("http://www.colr.org/json/color/random")
  .then((resp)=>{ return resp.json() })
  .then((json)=>{col3 = col2 + json.colors[0].hex;  console.log(col3);})
  .then((finval)=> {this.setState(finval);})
  
 return col3
}

handleclick(){
  
  var col1 = "black";
  var col2 = "#";
  var col3 ="";
  this.fetchfn(col2,col3)

  if (this.state.color !== "black"){
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
