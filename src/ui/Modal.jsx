import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";

function Modal({ onClose, children }) {
  return createPortal(
    <div className="bg-backdrop-color fixed left-0 top-0 z-50 h-screen w-full backdrop-blur-xl">
      <div className="fixed left-[50%] top-[50%] flex max-h-screen translate-x-[-50%] translate-y-[-50%] items-center overflow-scroll bg-stone-900 p-4 shadow-middle shadow-green-400">
        <div className="absolute right-5 top-5 cursor-pointer rounded border-2 border-green-400 bg-green-900 p-[0.1rem] hover:bg-green-700">
          <HiXMark color="white" size={25} onClick={onClose} />
        </div>

        <div className="p-4">{children}</div>
      </div>
    </div>,
    document.body,
  );
}

export default Modal;
