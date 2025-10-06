"use client";
import { useState } from "react";
import { checkboxData } from "./multi-select-checkbox.data";
import type { CheckboxNode } from "./multi-select-checkbox.types";

const MultiSelectCheckbox = () => {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set(""));

  // gets all child nodes ids
  const getAllNodeIds = (node: CheckboxNode) => {
    let ids = [node.id];

    if (node.children) {
      node.children.forEach((child) => {
        ids = ids.concat(getAllNodeIds(child));
      });
    }
    return ids;
  };

  // update parent selection
  const updateParentSelection = (node: CheckboxNode, selected: Set<string>) => {
  if (!node.children) return;

  const allChildrenSelected = node.children.every((child) =>
    selected.has(child.id)
  );

  if (allChildrenSelected) {
    selected.add(node.id);
  } else {
    selected.delete(node.id);
  }
};

  // handle checkbox change
  const handleCheckboxChange = (node: CheckboxNode, isChecked: boolean) => {
    const newSelected: Set<string> = new Set(selectedIds);

    const allNodeIds = getAllNodeIds(node);

    if (isChecked) {
      allNodeIds.forEach((id) => newSelected.add(id));
    } else {
      allNodeIds.forEach((id) => newSelected.delete(id));
    }

    const updateParents = (nodes: CheckboxNode[]) => {
      nodes.forEach((node) => {
        if (node.children) {
          updateParents(node.children);
          updateParentSelection(node, newSelected);
        }
      });
    };

    updateParents(checkboxData);
    setSelectedIds(newSelected);
  };

  const renderCheckbox = (data: CheckboxNode[]) => {
    return data.map((node) => {
      return (
        <div key={node.id} className="ml-4">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={selectedIds.has(node.id)}
              onChange={(e) => handleCheckboxChange(node, e.target.checked)}
            />
            {node.label}
          </label>
          {node.children && renderCheckbox(node.children)}
        </div>
      );
    });
  };

  return (
    <div className="w-full">
      <div className="mx-auto">{renderCheckbox(checkboxData)}</div>
    </div>
  );
};

export default MultiSelectCheckbox;
