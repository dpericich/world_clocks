import React, { Component } from 'react';
import Clocks from './Clocks';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location : [
        {
          name: 'New York',
          offset: -240,
        },
        {
          name : 'Paris',
          offset: 120,
        },
        {
          name: 'Tokyo',
          offset: 540,
        }
      ]
    }

  }
  render() {

    const wallStyle = {
      display : 'flex',
  
    }

    return (
      <div style={wallStyle}>
        <Clocks location={this.state.location}/>
      </div>
    )
  }
}

export default App
