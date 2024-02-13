import { RiDeleteBin2Line } from "react-icons/ri";
import { useDeletePost } from "./useDeletePost";
import SpinnerMini from "../../ui/SpinnerMini";

function DeletePost({ id }) {
  const { deletePost, isDeleting } = useDeletePost();

  function handleClick() {
    deletePost(id);
  }
  return (
    <div
      onClick={handleClick}
      className="flex cursor-pointer items-start text-green-400 transition duration-300 hover:text-green-700"
    >
      {isDeleting ? <SpinnerMini /> : <RiDeleteBin2Line size={25} />}
    </div>
  );
}

export default DeletePost;
