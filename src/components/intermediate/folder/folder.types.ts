export type TreeNodeProps = {
  node: {
    name: string;
    isFolder: boolean;
    children?: TreeNodeProps["node"][];
  };
};
