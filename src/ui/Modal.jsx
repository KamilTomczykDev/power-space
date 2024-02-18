import { createPortal } from "react-dom";
import { ImCross } from "react-icons/im";

function Modal({ children, onClose }) {
  return createPortal(
    <div
      onClick={onClose}
      className="fixed left-0 top-0 z-30 h-screen w-full bg-[#000000e4] backdrop-blur"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="fixed left-[50%] top-[50%] z-40 flex w-[95%] translate-x-[-50%] translate-y-[-50%] flex-col items-start justify-start gap-2 rounded-sm bg-primary-800 p-2 md:p-4 lg:w-[60%]"
      >
        <button
          onClick={onClose}
          className="text-secondary-400 transition duration-300 hover:opacity-60"
        >
          <ImCross size={15} />
        </button>
        {children}
      </div>
    </div>,
    document.body,
  );
}

export default Modal;
