import React from 'react';
import classes from "./ResetStopBtn.module.css";

const StopButton = (props) => {
    return (
        <button className={classes.btn} onClick={props.stop}>Stop</button>
    );
};

export default StopButton;