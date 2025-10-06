import type { CheckboxNode } from "./multi-select-checkbox.types";

export const checkboxData: CheckboxNode[] = [
  {
    id: "1",
    label: "Fruits",
    children: [
      { id: "1-1", label: "Banana" },
      { id: "1-2", label: "Apple" },
      { id: "1-3", label: "Orange" },
    ],
  },
  {
    id: "2",
    label: "Electronics",
    children: [
      { id: "2-1", label: "Laptop" },
      { id: "2-2", label: "Tablet" },
      { id: "2-3", label: "Phone" },
    ],
  },
];
