import React, { useEffect, useState } from 'react';
import classes from "./Timer.module.css";
import ResetButton from '../ResetStopBtn/ResetButton';
import StopButton from '../ResetStopBtn/StopButton';


const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    
    var timer;
    useEffect(() => {
        timer = setInterval(() => {
            setSeconds(seconds + 1);
            if (seconds == 59) {
                setMinutes(minutes + 1);
                setSeconds(0);
            } else if (minutes == 59) {
                setHours(hours + 1)
                setMinutes(0);
            }
        }, 1000) 
    return () => clearInterval(timer);
    });

    const restart = () => {
        setSeconds(0);
        setMinutes(0);
        setHours(0)
    }

    const stop = () => {
        clearInterval(timer);
    }

    return (
        <div className={classes.timerWrapper}>
            <div className={classes.timerContainer}>
                <p className={classes.timer} >
                    {hours < 10 ? "0" + hours : hours} 
                </p>

                <p className={classes.timer}>:</p>

                <p className={classes.timer} >
                    {minutes < 10 ? "0" + minutes : minutes}
                </p>

                <p className={classes.timer}>:</p>

                <p className={classes.timer} >
                    {seconds < 10 ? "0" + seconds : seconds}
                </p>
            </div>
            
            <div className={classes.btns}>
                <ResetButton restart = { restart }/>
                <StopButton stop = { stop }/>;
            </div>
        </div>
    );
};

export default Timer;