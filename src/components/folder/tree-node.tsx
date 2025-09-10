"use client";
import { useState, type FC } from "react";
import type { TreeNodeProps } from "./folder.types";

const TreeNode: FC<TreeNodeProps> = ({ node }: TreeNodeProps) => {
  const [isOpen, setIsOpen] = useState(false);

  if (node.isFolder) {
    return (
      <div className="ml-4">
        <div
          className="cursor-pointer font-medium flex items-center space-x-2 px-2 py-1 rounded-md hover:bg-gray-100 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-blue-600">{isOpen ? "📂" : "📁"}</span>
          <span>{node.name}</span>
        </div>

        {isOpen && node.children && (
          <div className="ml-6 border-l border-gray-300 pl-3">
            {node.children.map((child, index) => (
              <TreeNode key={index} node={child} />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="ml-10 flex items-center space-x-2 px-2 py-1 rounded-md hover:bg-gray-50 transition">
      <span>📄</span>
      <span className="text-gray-700">{node.name}</span>
    </div>
  );
};

export default TreeNode;
