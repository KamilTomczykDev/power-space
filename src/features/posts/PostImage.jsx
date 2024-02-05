import { useState } from "react";
import Modal from "../../ui/Modal";

function PostImage({ image }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleClick() {
    setIsModalOpen(!isModalOpen);
  }
  return (
    <>
      <img
        onClick={handleClick}
        src={image}
        className="max-h-[500px] w-full cursor-pointer rounded-sm object-cover transition duration-300 hover:opacity-70"
      />
      {isModalOpen && (
        <Modal onClose={handleClick}>
          <img src={image} className="w-full rounded-sm " />
        </Modal>
      )}
    </>
  );
}

export default PostImage;
