/**
 * Component lab meta data
 */

interface ComponentMetaDataSchema {
  slug: string;
  title: string;
  component: string;
}

export const ComponentMetaData: ComponentMetaDataSchema[] = [
  { slug: "counter", title: "Counter App", component: "counter" },
  { slug: "timer", title: "Time Counter", component: "timer" },
  { slug: "theme-mode", title: "Theme Mode", component: "theme-mode" },
  { slug: "folder", title: "Folder Structure", component: "folder" },
  { slug: "todo", title: "Todo App", component: "todo" },
  { slug: "traffic-light", title: "Traffic Light", component: "traffic-light" },
  { slug: "accordian", title: "Accordian", component: "accordian" },
  {
    slug: "search-autocomplete",
    title: "Search Autocomplete",
    component: "search-autocomplete",
  },
  { slug: "carousel", title: "Carousel", component: "carousel" },
  {
    slug: "multi-select-checkbox",
    title: "Multi Select Checkbox",
    component: "multi-select-checkbox",
  },
  {
    slug: "infinite-scroll",
    title: "Infinite Scroll",
    component: "infinite-scroll",
  },
  {
    slug: "multi-step-form",
    title: "Multi Step Form",
    component: "multi-step-form",
  },
];
