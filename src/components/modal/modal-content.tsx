import { type FC } from "react";

const ModalContent: FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if(e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 flex flex-col">
        <b className="mb-4">Sample Modal Content</b>
        <button
          type="button"
          className="bg-red-500 hover:bg-red-700 text-white rounded-md h-auto w-auto p-2 font-semibold cursor-pointer"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ModalContent;
