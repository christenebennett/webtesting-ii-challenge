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
    if (this.state.strikes < 3) {
      this.setState(prevState => {
        return {strikes: prevState.strikes + 1}
      })
    } else {
      this.setState({
        strikes: 0,
        balls: 0,
        fouls: 0,
        hits: 0
      })
    }
  }

  addFoul = () => {
    this.setState(prevState => {
      return {fouls: prevState.fouls + 1}
    })
  }

  addBall = () => {
    if (this.state.balls < 4) {
      this.setState(prevState => {
        return {balls: prevState.balls + 1}
      })
    } else {
      this.setState({
        strikes: 0,
        balls: 0,
        fouls: 0,
        hits: 0
      })
    }
  }

  addHit = () => {
    this.setState(prevState => {
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
