import { useState } from "react";

import Modal from "../../ui/Modal";
import UpdateProfileForm from "./UpdateProfileForm";

function UpdateProfile() {
  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <button
        onClick={handleClick}
        className="flex items-center justify-center rounded-md border-2 border-green-400 bg-green-900 px-4 py-2 font-semibold text-white hover:bg-green-800 disabled:opacity-60"
      >
        Change lifting values
      </button>
      {isOpen && (
        <Modal onClose={handleClick}>
          <UpdateProfileForm />
        </Modal>
      )}
    </>
  );
}

export default UpdateProfile;
