import React from "react";
import type { TabProps } from "../Tab.types";
import { tabStyles } from "./Tab.styles";

const Tab: React.FC<TabProps> = ({ id, title, disabled, onTabChange, isActive, handleKeyDown, setRef }) => {
  return (
    <button
      ref={setRef}
      className={tabStyles({ isActive })}
      id={id}
      disabled={disabled}
      onClick={() => !disabled && onTabChange?.(id)}
      onKeyDown={(e) => !disabled && handleKeyDown?.(e, id)}
      role="tab"
      aria-selected={isActive}
      tabIndex={isActive ? 0 : -1}
    >
      {title}
    </button>
  );
};

export default Tab;
