import { useState } from "react";
import { HiDotsVertical } from "react-icons/hi";

import DeletePost from "./DeletePost";
import HoverInfo from "../../ui/HoverInfo";
import EditPost from "./EditPost";

function PostContextMenu({ postId }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleClick() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <div className="relative">
      <div
        onClick={handleClick}
        className="relative cursor-pointer rounded-md p-1 text-green-400 transition duration-300 hover:bg-stone-900 hover:text-green-600"
      >
        <HiDotsVertical size={20} />
      </div>
      {isMenuOpen && (
        <div className="absolute bottom-10 left-[-40px] flex gap-2 border-2 border-stone-700 bg-stone-800 p-2 md:left-[-20px]">
          <HoverInfo text="Delete post">
            <DeletePost id={postId} />
          </HoverInfo>
          <HoverInfo text="Edit post">
            <EditPost />
          </HoverInfo>
        </div>
      )}
    </div>
  );
}

export default PostContextMenu;
