import React, { useEffect, useState } from 'react';
import './Styles/App.css';
import './Styles/ResetStyle.css';
import Timer from './Components/Timer/Timer';

function App() {
    return (
        <div className="App">
            <Timer/>
        </div>
    );
}

export default App;
