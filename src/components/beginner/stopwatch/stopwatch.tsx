"use client";
import { type FC, useEffect, useRef, useState } from "react";
import { stopwatchStyles } from "./stopwatch.styles";

const formatTime = (ms: number) => {
  const hours = Math.floor(ms / 3600000);
  const minutes = Math.floor((ms % 3600000) / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0"
  )}:${String(seconds).padStart(2, "0")}`;
};

const Stopwatch: FC<{}> = () => {
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const startRef = useRef<number>(0);
  const intervalRef = useRef<number | null>(null);

  const handleStartPause = () => {
    if (isRunning) {
      setIsRunning(false);
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    } else {
      startRef.current = Date.now() - time;
      intervalRef.current = window.setInterval(() => {
        setTime(Date.now() - startRef.current);
      }, 10);
      setIsRunning(true);
    }
  };

  const handleReset = () => {
    setIsRunning(false);
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setTime(0);
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, []);

  return (
    <div className={stopwatchStyles.wrapper()}>
      <h1 className={stopwatchStyles.timeDisplay()}>{formatTime(time)}</h1>
      <div className={stopwatchStyles.buttonContainer()}>
        <button
          onClick={handleStartPause}
          className={stopwatchStyles.button({
            variant: isRunning ? "pause" : "start",
          })}
        >
          {isRunning ? "Pause" : "Start"}
        </button>
        <button
          onClick={handleReset}
          className={stopwatchStyles.button({ variant: "reset" })}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
