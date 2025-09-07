"use client";
import type { FC } from "react";
import { useCurrentTime } from "./hooks/useCurrentTime";
import { timerStyles } from "./timer.styles";

const Timer: FC<{}> = () => {
  const { currentTime } = useCurrentTime();
  const labels = ["Hours", "Minutes", "Seconds"];
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  return (
    <div className={timerStyles.wrapper()}>
      <ul aria-label="timer" className={timerStyles.listContainer()}>
        {[hours, minutes, seconds].map((item, index) => {
          return (
            <li
              aria-label={`Current ${labels[index]}: ${item}`}
              key={index}
              className={timerStyles.listItems()}
            >
              <span>{item}</span>
              <span className="text-sm">{labels[index]}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Timer;
