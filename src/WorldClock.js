import React, {Component} from 'react'

class WorldClock extends Component {
    componentDidMount(props) {
        this.updateTime()
    }

    updateTime() {
        let curTime = new Date()
        const utcOffset = curTime.getTimezoneOffset();
        curTime.setMinutes(curTime.getMinutes() + utcOffset);
        curTime.setMinutes(curTime.getMinutes() + this.props.timezoneOffset);

        this.setState({
            time: curTime
        })
        setTimeout(this.updateTime.bind(this), 1000)
    }

    handleRotationTransformStyle(deg) {
        return "translate(0%, -50%) rotate(" + (deg - 180) + "deg)"
    }

    render() {
        const time = this.state?.time || new Date()
        const secondsDeg = (((time.getSeconds() / 60) * 360) + 90);
        const minutesDeg = (((time.getMinutes() / 60) * 360) + 90);
        const currentHour = (time.getHours() > 12) ? time.getHours() - 12 : time.getHours();
        const hoursDeg = (((currentHour / 12)* 360) + 90);

        return (
            <div style={wallStyle}>
                <div style={cityNameStyle}>{this.props.city}</div>
                <div style={clockStyle}>
                    <div style={faceStyle}>
                    <img style={clockFaceStyle} src={this.props.backgroundImage} alt={this.props.city} />
                        <div className="hour" style={{...handStyle, ...{transform: this.handleRotationTransformStyle(hoursDeg), width: '33%'}}}></div>
                        <div className="minute" style={{...handStyle, ...{transform: this.handleRotationTransformStyle(minutesDeg)}}}></div>
                        <div className="second" style={{...handStyle, ...{transform: this.handleRotationTransformStyle(secondsDeg), height: '3px'}}}></div>  
                        <div style={centerDotStyle}></div>  
                    </div>    
                </div>
            </div>
        )
    }
}



const wallStyle = {
    textAlign: 'center',
    background: 'white',
    width: '50%',
    margin: '0 auto 0 auto',
}

const cityNameStyle = {
    textAlign : 'center',
    fontSize : '40px',
    padding : '15px 0px',
    border: 'solid black 5px',
    width: '40%',
    margin: '10px auto',
    background: 'white',
}

const faceStyle = {
    position : 'relative',
    width : '100%',
    height: '100%',
    transfrom: 'translate(-3px)',
}

const clockStyle = {
    width: '15rem',
    height : '15rem',
    border: '15px solid black',
    borderRadius: '50%',
    margin: '50px auto',
}

const clockFaceStyle = {
    background: 'cover',
    borderRadius: '50%',
    width: '15rem',
    height: '15rem',       

}

const handStyle = {
    width : '48%',
    height: '8px',
    background: 'black',
    position: 'absolute',
    top: '50%',
    left:'50%',
    transformOrigin : '0% center',
    transform: 'rotate(90deg)',
    transition: 'all 0.05s',
    transitionTimingFunction: 'cubic-bezier(0.1, 2.7, 0.58, 1)',
    borderRadius: '0 15px 15px 0',
}

const centerDotStyle = {
    background: '#8a8989',
    borderRadius: '50%',
    height: '12px',
    width: '12px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1
}

export default WorldClock;
