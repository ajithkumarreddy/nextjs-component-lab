"use client";
import { type FC } from "react";
import { useTheme } from "./hooks/useTheme";

const ThemeMode: FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="darkMode h-120 w-full flex justify-center items-center border-2 rounded-md">
      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded-md bg-black text-white cursor-pointer font-medium shadow-sm hover:shadow-md transition-colors"
      >
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>
    </div>
  );
};

export default ThemeMode;
