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
];
