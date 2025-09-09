import { folderData } from "./folder.data";
import TreeNode from "./tree-node";

const Folder = () => {
  return (
    <div className="folder border-2 w-100 h-120 mx-auto">
        <TreeNode node={folderData}/>
    </div>
  )
};

export default Folder;
