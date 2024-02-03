import { useForm } from "react-hook-form";
import { useCurrentProfile } from "../profiles/useCurrentProfile";
import SpinnerMini from "../../ui/SpinnerMini";
import { insertPost } from "../../services/apiPosts";
// import { RiImageAddFill } from "react-icons/ri";

function AddPost() {
  const { handleSubmit, register, formState } = useForm();
  const { errors } = formState;
  const { profile, isLoading } = useCurrentProfile();
  console.log(profile);

  if (isLoading)
    return (
      <div className="text-white">
        <SpinnerMini color="white" />
      </div>
    );

  const [{ id, username }] = profile;

  function onSubmit(data) {
    insertPost({ ...data, profileId: id, profileUsername: username });
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-2 md:items-start"
    >
      {errors?.content?.message && (
        <div className="rounded-md text-xs text-red-400 md:text-xl">
          {errors?.content?.message}
        </div>
      )}
      <textarea
        className="w-full resize-none rounded-md border-2  border-stone-400 bg-stone-900 p-2 text-white"
        id="content"
        placeholder="Your toughts about last workout..."
        {...register("content", {
          required: "Insert text",
        })}
      />

      <div className="flex flex-col gap-2 md:flex-row">
        <button className="w-full rounded-md border-2 border-green-400 bg-green-800 px-3 py-1 text-white hover:bg-green-700 md:w-auto">
          Add post
        </button>
        <input
          type="file"
          id="image"
          accept="image/*"
          className="text-stone-400 file:rounded-md file:border-solid file:border-stone-400 file:bg-stone-700 file:px-2 file:py-1 file:text-white hover:file:cursor-pointer  hover:file:bg-stone-600"
        />
        {/* <button className="hover:opacity-70">
          <RiImageAddFill size={30} color={"#616161"} />
        </button> */}
      </div>
    </form>
  );
}

export default AddPost;
