import React, { Component } from 'react';
import './App.css';
import ResultComponent from './components/ResultComponent';
import KeyPadComponent from "./components/KeyPadComponent";
import request from 'superagent';

class App extends Component {
  constructor(){
    super();

    this.state = {
      result: ""
    }
  }
  attachToTheResult = async char => {
    if(this.state.result.includes('Error;')) {
      await this.reset()
    }
    if(char !== "Enter") {
      this.setState({
        result: this.state.result + char
      })
    }
  }
  handleKeyPress = async event => {
    if(this.state.result.includes('Error;')) {
      await this.reset()
    }
    const allowedKeys = ['Backspace', '(', ')', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '*', '/', '+', '-', '.', 'Enter']
    if(allowedKeys.includes(event.key)) {
      if(event.key === 'Enter') this.calculate();
      event.key === 'Backspace' ? this.backspace() : this.attachToTheResult(event.key)
    }
  }
  onClick = async button => {
    if(this.state.result.includes('Error;')) {
      await this.reset()
    }
    if(button === "="){
      await this.calculate()
    }

    else if(button === "C"){
      this.reset()
    }
    else if(button === "DEL"){
      await this.backspace()
    }

    else {
      await this.attachToTheResult(button)
    }
  };


  calculate = async () => {
    try {
      const res = await request
        .post(`http://localhost:5000/calculate`)
        .send({str: this.state.result})
      this.setState({
        result: res.body.result
      })
    } catch (e) {
      this.setState({
        result: `Error; ${e}`
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

  render() {
    return (
      <div onKeyDown={this.handleKeyPress} tabIndex={-1} className="mainClass">
        <div className="calculator-body">
          <h1>Calc u later</h1>
          <ResultComponent result={this.state.result}/>
          <KeyPadComponent onClick={this.onClick}/>
        </div>
      </div>
    );
  }
}

export default App;