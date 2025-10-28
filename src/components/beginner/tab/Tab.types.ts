import React, { ReactNode } from "react";

// Tab types
export type TabProps = {
  id: string;
  title: string;
  disabled?: boolean;
  onTabChange?: (id: string) => void;
  isActive: boolean;
  handleKeyDown?: (e: React.KeyboardEvent<HTMLButtonElement>, id: string) => void;
  setRef?: (e: HTMLButtonElement) => void;
};

// TabPanel types
export type TabPanel = {
  id: string;
  content?: ReactNode;
  lazyLoad?: boolean;
  contentId?: string;
};

// TabList types
export type TabList = {
  activeIndex: string;
  tabs: (TabProps & TabPanel)[];
};
