import React from 'react'

function Clock({ name, offset, backgroundImage, time}) {

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
        // padding: '2rem',
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
        transformOrigin : '100%',
        transform: 'rotate(90deg)',
        transition: 'all 0.05s',
        transitionTimingFunction: 'cubic-bezier(0.1, 2.7, 0.58, 1)',
        borderRadius: '0 15px 15px 0',
    }

    let setDate = () => {

        //Create new Date object and set it to UTF default
        //So that we can pass the offset in for each city

        // let date = new Date();
        // let utc_offset = date.getTimezoneOffset();
        // date.setMinutes(date.getMinutes() + utc_offset);
        // date.setMinutes(date.getMinutes() + offset);
        console.log(time)


        let setSeconds = (((time.getSeconds() / 60) * 360) + 90);
        const secondHand = document.querySelector('.second');
        secondHand.style.transform = `rotate(${setSeconds}deg)`;
        
    
        let setMinutes = (((time.getMinutes() / 60) * 360) + 90);
        const minuteHand = document.querySelector('.minute');
        minuteHand.style.transform = `rotate(${setMinutes}deg)`;
    
        
        let currentHour = (time.getHours() > 12) ? time.getHours() - 12 : time.getHours();
        let setHours = (((currentHour / 12)* 360) + 90);
        const hourHand = document.querySelector('.hour');
        hourHand.style.transform = `rotate(${setHours}deg)`;
        

    };

    // setInterval(setDate, 1000);

    return (
        <div style={wallStyle}>
            <div style={cityNameStyle}>{name}</div>
            <div style={clockStyle}>
                <div style={faceStyle}>
                <img style={clockFaceStyle} src={backgroundImage} alt={name}/>
                    <div className="hour" style={handStyle}></div>
                    <div className="minute" style={handStyle}></div>
                    <div className="second" style={handStyle}></div>    
                </div>    
            </div>
        </div>
    )
}

export default Clock;
