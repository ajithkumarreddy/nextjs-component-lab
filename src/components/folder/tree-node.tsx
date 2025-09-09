"use client";
import { useState, type FC } from "react";

type TreeNodeProps = {
  node: {
    name: string;
    isFolder: boolean;
    children?: TreeNodeProps["node"][];
  };
};

const TreeNode: FC<TreeNodeProps> = ({ node }: TreeNodeProps) => {
  const [isOpen, setIsOpen] = useState(false);

  if (node.isFolder) {
    return (
      <div className="ml-4">
        <div
          className="cursor-pointer font-semibold flex items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          Folder - {node.name}
        </div>

        {isOpen && node.children && (
          <div className="ml-6 border-l border-gray-300 pl-2">
            {node.children.map((node, index) => (
              <TreeNode key={index} node={node} />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="ml-10 flex items-center">
      <span className="mr-2">📄</span> {node.name}
    </div>
  );
};

export default TreeNode;
