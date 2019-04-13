import React from 'react';

class Display extends React.Component {
  constructor(props){
    super(props) 
  }

  render(){
    return(
      <>
        <h2>Scorekeeper</h2>
        <div>
          <div data-testid="balls">Balls: {this.props.balls}</div>
          <div data-testid="strikes">Strikes: {this.props.strikes}</div>
        </div>
        <div>
          <div data-testid="fouls">Fouls: {this.props.fouls}</div>
          <div data-testid="hits">Hits: {this.props.hits}</div>
        </div>
      </>
    )
  }
}

export default Display;