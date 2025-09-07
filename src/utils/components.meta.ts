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
];
