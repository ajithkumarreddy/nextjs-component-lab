'use client';
import { type FC, useState } from "react";
import useThrottle from "./hooks/useThrottle";

const Throttle: FC<{}> = () => {
  const [text, setText] = useState("");
  const throttledText = useThrottle(text, 1000);

  return (
    <div style={{ padding: 20 }}>
      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          padding: "8px",
          width: "250px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      <p>Live value: {text}</p>
      <p>Throttled value (updates every 1s): {throttledText}</p>
    </div>
  );
};

export default Throttle;
