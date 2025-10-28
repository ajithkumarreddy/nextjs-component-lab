import AnalyticsPanel from "./panels/AnalyticsPanel";
import TabList from "./TabList";

const tabsProps = [
  {
    id: "tab-1",
    title: "Tab 1",
    disabled: false,
    content: <p>Tab 1 content</p>,
    isActive: false,
  },
  {
    id: "tab-2",
    title: "Tab 2",
    disabled: false,
    content: <p>Tab 2 content</p>,
    isActive: false,
  },
  {
    id: "tab-3",
    title: "Disabled Tab 3",
    disabled: true,
    content: <p>Tab 3 content</p>,
    isActive: false,
  },
  {
    id: 'tab-4',
    title: "Lazy load Tab 4",
    disabled: false,
    lazyLoad: true,
    contentId: 'analytics',
    isActive: false,
  }
];

const TabListWithProps = () => {
  return (
    <div className="container w-240 mx-auto">
      <TabList activeIndex="tab-1" tabs={tabsProps} />;
    </div>
  );
};

export default TabListWithProps;
