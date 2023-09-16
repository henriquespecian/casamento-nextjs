import React from 'react';
import { useState, useEffect } from 'react';

const Timer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "April, 13, 2024";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="timer" role="timer">
        <div>
          <p>
            {days < 10 ? "0" + days : days} { days == 1 ? "Dia " : "Dias "}
            {hours < 10 ? "0" + hours : hours} {hours == 1 ? "Hora " : "Horas "}
            {minutes < 10 ? "0" + minutes : minutes} {minutes == 1 ? "Minuto " : "Minutos "}
            {seconds < 10 ? "0" + seconds : seconds} {seconds == 1 ? "Segundo" : "Segundos"}
          </p>
        </div>
    </div>
  );
};

export default Timer;