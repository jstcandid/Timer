import { useState } from 'react';
import { Button } from '../Buttons/Button';

export const Timer = () => {
  const [time, setTime] = useState(0);

  const [timerId, setTimerId] = useState<NodeJS.Timeout>();

  const onClickStart = () => {
    const intervalId = setInterval(() => {
      setTime((time) => time + 1);
      console.log(time);
    }, 1000);

    setTimerId(intervalId);
  };

  const onClickStop = () => {
    if (timerId) {
      clearInterval(timerId);
    }
  };

  const onClickReset = () => {
    setTime(0);
    if (timerId) {
      clearInterval(timerId);
    }
  };

  return (
    <div>
      <p className='fs-2'>{time}</p>
      <Button text='Start' onClick={onClickStart} />
      <Button text='Stop' onClick={onClickStop} />
      <Button text='Reset' onClick={onClickReset} />
    </div>
  );
};
