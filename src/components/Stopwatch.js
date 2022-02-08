import React, { useRef, useState } from 'react';
import { Button } from '@material-ui/core';
const Stopwatch = (props) => {
  const status = {
    start: 'start',
    pause: 'pause',
    stop: 'stop',
  };

  const [timerValue, setTimerValue] = useState(0);
  const [timerStatus, setTimerStatus] = useState(status.stop);
  let interval = useRef(null);
  const handleClick = (val) => {
    if (val === 'start') {
      interval.current = setInterval(() => {
        setTimerValue((prevVal) => prevVal + 1);
      }, 1000);
    } else if (val === 'pause') {
      clearInterval(interval.current);
    } else if (val === 'stop') {
      clearInterval(interval.current);
      setTimerValue(0);
    }
    setTimerStatus(val);
  };

  return (
    <>
      <div>{timerValue}</div>
      <div>
        {timerStatus === 'stop' && (
          <Button
            variant="outlined"
            color="primary"
            onClick={() => handleClick('start')}
          >
            Start
          </Button>
        )}
        {timerStatus === 'start' && (
          <>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => handleClick('pause')}
            >
              Pause
            </Button>
            <Button
              variant="outlined"
              color="danger"
              onClick={() => handleClick('stop')}
            >
              Stop
            </Button>
          </>
        )}
        {timerStatus === 'pause' && (
          <>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => handleClick('start')}
            >
              Start
            </Button>
            <Button
              variant="outlined"
              color="danger"
              onClick={() => handleClick('stop')}
            >
              Stop
            </Button>
          </>
        )}
      </div>
    </>
  );
};

export default Stopwatch;
