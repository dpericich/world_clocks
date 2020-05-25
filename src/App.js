import React, { Component } from 'react';
import WorldClock from './WorldClock';

class App extends Component {
  render() {
    const clockCities = [
      {
        city: 'New York',
        timezoneOffset: -240,
        key: 1,
        backgroundImage: require('./static/statue_of_liberty.png'),
      },
      {
        city : 'Paris',
        timezoneOffset: 120,
        key: 2,
        backgroundImage: require('./static/eiffel_tower.png'),
      },
      {
        city: 'Tokyo',
        timezoneOffset: 540,
        key: 3,
        backgroundImage: require('./static/tokyo.png'),
      }
    ];

    const wallStyle = {
      display : 'flex',
    };

    return (
      <div style={wallStyle}>
        {clockCities.map(cityInfo => 
          <WorldClock {...cityInfo} />
        )}
      </div>
    )
  }
}

export default App
