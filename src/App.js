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
          time: new Date(),
        },
        {
          name : 'Paris',
          offset: 120,
          id: 2,
          backgroundImage: require('./static/eiffel_tower.png'),
          time: new Date(),
        },
        {
          name: 'Tokyo',
          offset: 540,
          id: 3,
          backgroundImage: require('./static/tokyo.png'),
          time: new Date(),
        }
      ]
    }
  }

  
  componentDidMount() {
    setTimeout(this.setTime, 1000);
  }

  setTime() {
    let new_time = new Date();
    let utc_offset = new_time.getTimezoneOffset();
    new_time.setMinutes(new_time.getMinutes() + utc_offset);
    new_time.setMinutes(new_time.getMinutes + this.state.offset);
    this.setState({time: new_time});
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
