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
          <div>Balls</div>
          <div>Strikes</div>
        </div>
      </>
    )
  }
}

export default Display;