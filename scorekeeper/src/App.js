import React, { Component } from 'react';
import './App.css';
import Dashboard from './dashboard/Dashboard'
import Display from './display/Display'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      strikes: 0,
      balls: 0,
      fouls: 0,
      hits: 0
    }
  }

  addStrike = () => {
    this.setState(prevState => {
      console.log(this.state.strikes)
      return {strikes: prevState.strikes + 1}
    })
  }
  addFoul = () => {
    this.setState(prevState => {
      console.log(this.state.fouls)
      return {fouls: prevState.fouls + 1}
    })
  }
  addBall = () => {
    this.setState(prevState => {
      console.log(this.state.balls)
      return {balls: prevState.balls + 1}
    })
  }
  addHit = () => {
    this.setState(prevState => {
      console.log(this.state.hits)
      return {hits: prevState.hits + 1}
    })
  }

  render() {
    return (
      <div className="App">
        <Dashboard 
          {...this.state}
          addStrike={this.addStrike} 
          addFoul={this.addFoul} 
          addBall={this.addBall} 
          addHit={this.addHit} />
        <Display {...this.state}/> 
      </div>
    );
  }
}

export default App;
