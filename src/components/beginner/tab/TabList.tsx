"use client";
import React, { useCallback, useState, useRef } from "react";
import type { TabList as TabListProps } from "./Tab.types";
import Tab from "./Tab/Tab";
import TabPanel from "./TabPanel/TabPanel";

const TabList: React.FC<TabListProps> = ({ activeIndex, tabs }) => {
  const [currentIndex, setCurrentIndex] = useState<string>(activeIndex);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const onTabChange = useCallback((id: string) => {
    setCurrentIndex(id);
    tabRefs.current[id]?.focus();
  }, []);

  const findNext = (startIndex: number, delta: 1 | -1) => {
    const len = tabs.length;
    if (len === 0) return null;
    let i = startIndex;
    for (let iter = 0; iter < len; iter++) {
      i = (i + delta + len) % len;
      const candidate = tabs[i];
      if (!candidate.disabled) return candidate.id;
    }
    return null;
  };

  const focusById = (id: string) => {
    if (!id) return;
    const el = tabRefs.current[id];
    if (el) el.focus();
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    id: string
  ) => {
    const currentIdx = tabs.findIndex((t) => t.id === id);
    if (currentIdx === -1) return;

    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      const nextId = findNext(currentIdx, 1);
      if (nextId) {
        setCurrentIndex(nextId);
        focusById(nextId);
      }
      return;
    }

    if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      const nextId = findNext(currentIdx, -1);
      if (nextId) {
        setCurrentIndex(nextId);
        focusById(nextId);
      }
      return;
    }
  };

  const activeTab = tabs.find((tab) => tab.id === currentIndex);

  return (
    <div className="flex flex-col gap-2">
      {/* Tabs Row */}
      <div
        className="
          flex flex-row gap-2
          bg-gray-100
          rounded-xl
          shadow-inner
          w-fit
          border border-gray-200
        "
        role="tablist"
      >
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            id={tab.id}
            title={tab.title}
            disabled={tab.disabled}
            onTabChange={onTabChange}
            isActive={currentIndex === tab.id}
            handleKeyDown={handleKeyDown}
            setRef={(el: HTMLButtonElement | null) => {
              tabRefs.current[tab.id] = el;
            }}
          />
        ))}
      </div>

      {/* Panel Section */}
      {activeTab && (
        <TabPanel
          id={activeTab.id}
          lazyLoad={activeTab?.lazyLoad}
          content={activeTab?.content}
          contentId={activeTab?.contentId}
        />
      )}
    </div>
  );
};

export default TabList;
