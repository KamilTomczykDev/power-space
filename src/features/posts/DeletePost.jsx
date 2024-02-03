import { RiDeleteBin2Line } from "react-icons/ri";
import { deletePost } from "../../services/apiPosts";

function DeletePost({ id }) {
  function handleClick() {
    deletePost(id);
  }
  return (
    <div
      onClick={handleClick}
      className="flex cursor-pointer items-start hover:opacity-70"
    >
      <RiDeleteBin2Line size={25} color={"#969696"} />
    </div>
  );
}

export default DeletePost;
