import React, { Component } from 'react';
import Clocks from './Clocks';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locations : [
        {
          name: 'New York',
          offset: -240,
          id: 1,
          backgroundImage: require('./static/statue_of_liberty.png'),
        },
        {
          name : 'Paris',
          offset: 120,
          id: 2,
          backgroundImage: require('./static/eiffel_tower.png'),
        },
        {
          name: 'Tokyo',
          offset: 540,
          id: 3,
          backgroundImage: require('./static/tokyo.png'),
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
        <Clocks locations={this.state.locations}/>
      </div>
    )
  }
}

export default App
