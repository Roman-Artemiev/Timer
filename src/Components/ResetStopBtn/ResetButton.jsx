import React from 'react';
import classes from "./ResetStopBtn.module.css";

const ResetButton = (props) => {
    return (
        <button className={classes.btn} onClick={props.restart}>Restart</button>
    );
};

export default ResetButton;