import { useState } from "react";
import { HiDotsVertical } from "react-icons/hi";

import DeletePost from "./DeletePost";
import HoverInfo from "../../ui/HoverInfo";
import EditPost from "./EditPost";

function PostContextMenu({ postId, setIsEditing }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleClick() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <div className="relative">
      <button
        onClick={handleClick}
        className="relative cursor-pointer rounded-md p-1 text-secondary-400 transition duration-300 hover:bg-primary-900 hover:text-secondary-600"
      >
        <HiDotsVertical size={20} />
      </button>
      {isMenuOpen && (
        <div className="absolute bottom-10 left-[-40px] flex gap-2 border-1 border-main bg-primary-800 p-2 md:left-[-20px]">
          <HoverInfo text="Delete post">
            <DeletePost id={postId} />
          </HoverInfo>
          <HoverInfo text="Edit post">
            <EditPost setIsEditing={setIsEditing} />
          </HoverInfo>
        </div>
      )}
    </div>
  );
}

export default PostContextMenu;
