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
  .then((response)=>{ return response.json() })
  .then((response)=>{
     this.setState({response}); 
     document.getElementById("output").innerHTML=col2+response.colors[0].hex; 
     })
  /* response.colors[0].hex gives the hex number for the rnd color */
  
 
  }

handleclick(){
  
  var col1 = "black";
  var col2 = "#";
  var col3 ="";
  this.fetchfn(col2,col3);
  document.getElementById("output").style.visibility = "hidden";
 col3=document.getElementById("output").innerHTML;
  
  console.log(col3);
  if (this.state.color !== "black"){
   this.setState({color: col1});
  }
 else
  {    
    this.setState({color: col3});
  } 
  }

updatfrominput(e){  
  this.setState({resp: e.target.value})
  }


 
  render() {
     
    return (
      
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title" style={{color: this.state.color}} onClick={this.handleclick.bind(this)} >{this.state.resp} </h1>
         
        </header>
        <input onChange={(e)=> this.updatfrominput(e)}   />
        
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p id="output" ></p>
      </div>
      
    );
  }

}

export default App;
