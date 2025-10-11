"use client";
import { useState, useEffect } from "react";
import { config } from "./traffic-light.config";

type Light = keyof typeof config;

const TrafficLight = () => {
  const [current, setCurrent] = useState<Light>("green");

  useEffect(() => {
    const currentConfig = config[current];

    const timer = setTimeout(() => {
      setCurrent(currentConfig.next as Light);
    }, currentConfig.duration);

    return () => clearTimeout(timer);
  }, [current]);

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="bg-gray-900 p-4 rounded-xl flex flex-col gap-4">
        {Object.keys(config).map((light) => (
          <div
            key={light}
            className="w-16 h-16 rounded-full transition-all duration-300"
            style={{
              backgroundColor:
                current === light ? config[light].backgroundColor : "gray",
            }}
          ></div>
        ))}
      </div>
      <p className="mt-4 text-lg font-semibold capitalize">
        Current: {current}
      </p>
    </div>
  );
};

export default TrafficLight;
