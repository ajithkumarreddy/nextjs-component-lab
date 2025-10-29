/**
 * Component lab meta data
 */

interface ComponentMetaDataSchema {
  category: string;
  slug: string;
  title: string;
  component: string;
}

export const BeginnerComponentMetaData: ComponentMetaDataSchema[] = [
  {
    category: "beginner",
    slug: "counter",
    title: "Counter App",
    component: "counter",
  },
  { category: "beginner", slug: "todo", title: "Todo App", component: "todo" },
  {
    category: "beginner",
    slug: "accordian",
    title: "Accordian",
    component: "accordian",
  },
  {
    category: "beginner",
    slug: "modal",
    title: "Modal",
    component: "modal",
  },
  {
    category: "beginner",
    slug: "toast",
    title: "Toast",
    component: "Toast",
  },
  {
    category: "beginner",
    slug: "tab",
    title: "Tabs Component",
    component: "Tab",
  },
  {
    category: "beginner",
    slug: "pagination",
    title: "Pagination",
    component: "Pagination",
  },
  {
    category: "beginner",
    slug: "star-rating",
    title: "Star Rating",
    component: "StarRating",
  },
  {
    category: "beginner",
    slug: "timer",
    title: "Time Counter",
    component: "timer",
  },
  {
    category: "beginner",
    slug: "traffic-light",
    title: "Traffic Light",
    component: "traffic-light",
  },
  {
    category: "beginner",
    slug: "theme-mode",
    title: "Theme Mode",
    component: "theme-mode",
  },
];

const IntermediateComponentMetaData: ComponentMetaDataSchema[] = [
  {
    category: "intermediate",
    slug: "search-autocomplete",
    title: "Search Autocomplete",
    component: "search-autocomplete",
  },
  {
    category: "intermediate",
    slug: "infinite-scroll",
    title: "Infinite Scroll",
    component: "infinite-scroll",
  },
  {
    category: "intermediate",
    slug: "carousel",
    title: "Carousel",
    component: "carousel",
  },
  {
    category: "intermediate",
    slug: "folder",
    title: "Folder Structure",
    component: "folder",
  },
  {
    category: "intermediate",
    slug: "multi-select-checkbox",
    title: "Multi Select Checkbox",
    component: "multi-select-checkbox",
  },
  {
    category: "intermediate",
    slug: "multi-step-form",
    title: "Multi Step Form",
    component: "multi-step-form",
  },
];

export const ComponentMetaData: ComponentMetaDataSchema[] = [
  ...BeginnerComponentMetaData,
  ...IntermediateComponentMetaData,
];
