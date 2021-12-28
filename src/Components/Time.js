import React, {useState} from 'react';

function Time(props){

//need to initialize state via useState method
const [time, setTime] = useState(new Date().toLocaleTimeString())

//need a function to autoUpdate time
setTimeout(() => {
    setTime(new Date().toLocaleTimeString())
}, 1000);

    return(
        <div>
            <h2>The current time {props.name} is {time}</h2>
        </div>

    )
}

export default Time;