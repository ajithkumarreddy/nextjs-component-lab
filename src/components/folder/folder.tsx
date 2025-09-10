import { folderData } from "./folder.data";
import TreeNode from "./tree-node";

const Folder = () => {
  return (
    <div className="folder border rounded-lg shadow-sm w-[320px] mx-auto p-4 bg-white">
      <h2 className="text-lg font-semibold mb-3 text-gray-800">📂 Project Files</h2>
      <TreeNode node={folderData} />
    </div>
  );
};

export default Folder;
