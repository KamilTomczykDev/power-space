import { RiImageAddFill } from "react-icons/ri";

function AddPost() {
  return (
    <div className="flex flex-col gap-2 md:items-start">
      <textarea
        className="w-full resize-none rounded-md border-2  border-stone-400 bg-stone-900 p-2 text-white"
        cols="20"
        placeholder="Your toughts about last workout..."
      />
      <div className="flex gap-2">
        <button className="w-full rounded-md border-2 border-green-400 bg-green-800 px-3 py-1 text-white hover:bg-green-700">
          Add post
        </button>
        <button className="hover:opacity-70">
          <RiImageAddFill size={30} color={"#616161"} />
        </button>
      </div>
    </div>
  );
}

export default AddPost;
