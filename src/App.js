import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
constructor(props){
  super(props);
   this.state = { resp: "Welcome to React "};
   
   
}

fetchfn(col2,col3){
  fetch("http://www.colr.org/json/color/random")
  .then((resp)=>{ return resp.json() })
  .then((resp)=>{ this.setState({finval: resp});  console.log(col2 + resp.colors[0].hex);})
  
  
 return 
}

handleclick(){
  
  var col1 = "black";
  var col2 = "#";
  var col3 ="";
  this.fetchfn(col2,col3);
  
  if (this.state.color !== "black"){
   this.setState({color: col1});
 }
 else
 {
    
    this.setState({color: col2});
 } 
}

updatfrominput(e){
  this.setState({[e.target.name]: e.target.value})
  console.log(e.target.value);
}


 
  render() {
     
    return (
      
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title" style={{color: this.state.color}} onClick={this.handleclick.bind(this)}>{this.state.resp} </h1>
         
        </header>
        <input onChange={(e)=> this.updatfrominput(e)} value={this.state.value} name="input1" />
        
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        
      </div>
      
    );
  }

}

export default App;
