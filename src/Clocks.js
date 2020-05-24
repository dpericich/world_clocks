import React, { Component } from 'react';
import Clock from './Clock'

class Clocks extends Component {
    render() {
        return (
            this.props.locations.map(location => 
                <Clock key = {location.id} name={location.name} offset={location.offset} 
                backgroundImage={location.backgroundImage}/>
            )
        )
    }
}


export default Clocks;