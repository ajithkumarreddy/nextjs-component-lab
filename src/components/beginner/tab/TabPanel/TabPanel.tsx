import React, {
  ComponentType,
  lazy,
  LazyExoticComponent,
  Suspense,
} from "react";
import type { TabPanel } from "../Tab.types";
import { tabPanelStyles } from "./TabPanel.styles";

const panelImports: Record<string, () => Promise<any>> = {
  analytics: () => import("../panels/AnalyticsPanel"),
  reports: () => import("../panels/ReportsPanel"),
};

const TabPanel: React.FC<TabPanel> = ({ id, lazyLoad, content, contentId }) => {
  let LazyComponent: LazyExoticComponent<ComponentType<any>> | null = null;

  if (lazyLoad && contentId && panelImports[contentId]) {
    LazyComponent = lazy(panelImports[contentId]);
  }

  return (
    <div className={tabPanelStyles()} id={id}>
      {lazyLoad && LazyComponent ? (
        <Suspense fallback={<div className="p-4">Loading...</div>}>
          <LazyComponent />
        </Suspense>
      ) : (
        content
      )}
    </div>
  );
};

export default TabPanel;
