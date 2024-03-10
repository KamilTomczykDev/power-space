import { RiDeleteBin2Line } from "react-icons/ri";
import { useDeletePost } from "./useDeletePost";
import SpinnerMini from "../../ui/SpinnerMini";

function DeletePost({ id }) {
  const { deletePost, isDeleting } = useDeletePost();

  function handleClick() {
    deletePost(id);
  }
  return (
    <button
      onClick={handleClick}
      className="flex cursor-pointer items-start text-secondary-400 transition duration-300 hover:text-secondary-700"
    >
      {isDeleting ? <SpinnerMini /> : <RiDeleteBin2Line size={25} />}
    </button>
  );
}

export default DeletePost;
