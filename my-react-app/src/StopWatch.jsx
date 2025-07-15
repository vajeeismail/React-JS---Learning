import React, {useState, useEffect, useRef} from 'react';

function StopWatch() {

    const [isRunning, setIsrunning] = useState(false);
    const [elapsedTime, setElapsedTime] =  useState(0);

    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
        if (isRunning) {
           intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10);
        }

        return () => {
            clearInterval(intervalIdRef.current);
        }

    }, [isRunning]);

    function start () {
        setIsrunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }

    function stop () {
        setIsrunning(false);
    }

    function reset () {
        setElapsedTime(0);
        setIsrunning(false);
    }

    function formatTime () {
        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(elapsedTime / (1000) % 60);
        let milliseconds = Math.floor((elapsedTime % 1000) / 10);

        return `${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`;
    }

    function pad(number) {
        return number.toString().padStart(2, '0');
    }

    return (
        <div className='stopwatch'>
            <div className='display'>{formatTime()}</div>
            <div className='control'>
                <button onClick={start} className='start-btn'>Start</button>
                <button onClick={stop} className='stop-btn'>Stop</button>
                <button onClick={reset} className='reset-btn'>Reset</button>
            </div>
        </div>
    ); 

}

export default StopWatch