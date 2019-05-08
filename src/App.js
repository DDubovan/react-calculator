import React, { Component } from 'react';
import './App.css';
import Keypad from "./components/Keypad";
import Result from "./components/Result";

class App extends Component {
  constructor(){
    super();
    this.state = {
        result: ""
    }
}

onClick = button => {
  if(button === "="){
      this.calculate()
  }
  else if(button === "CE"){
      this.reset()
  }
  else {
      this.setState({
          result: this.state.result + button
      })
  }
};

calculate = () => {
  try {
      this.setState({
          result: (eval(this.state.result) || "" ) + ""
      })
  }
  catch (e) {
      this.setState({
          result: "error"
      })
  }
};

reset = () => {
  this.setState({
      result: ""
  })
};

backspace = () => {
  this.setState({
      result: this.state.result.slice(0, -1)
  })
};

  render(){
    return(
      <div className="App">
          <h1>Calculator</h1>
          <Keypad onClick={this.onClick}/>
          <Result result={this.state.result}/>
      </div>
    );
  }
}

export default App;
