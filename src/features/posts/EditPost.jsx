import { MdOutlineEdit } from "react-icons/md";

function EditPost({ setIsEditing }) {
  return (
    <div
      onClick={() => setIsEditing(true)}
      className="cursor-pointer text-secondary-400 transition duration-300 hover:text-secondary-700"
    >
      <MdOutlineEdit size={25} />
    </div>
  );
}

export default EditPost;
