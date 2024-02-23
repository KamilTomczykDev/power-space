import { useForm } from "react-hook-form";
import { useCurrentProfile } from "../profiles/useCurrentProfile";
import { useInsertPost } from "./useInsertPost";

import SpinnerMini from "../../ui/SpinnerMini";
import Spinner from "../../ui/Spinner";
import Button from "../../ui/Button";

function AddPost() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const { profile, isLoading } = useCurrentProfile();
  const { insertPost, isPosting } = useInsertPost();

  if (isLoading)
    return (
      <div className="text-secondary-400">
        <Spinner />
      </div>
    );

  const [{ id, username }] = profile;

  function onSubmit(data) {
    insertPost({
      ...data,
      profileId: id,
      profileUsername: username,
      image: data?.image[0],
    });
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
        className="w-full resize-none rounded-md bg-primary-800 p-2 text-white disabled:opacity-60"
        id="content"
        disabled={isPosting}
        placeholder="Your toughts about last workout..."
        {...register("content", {
          required: "Insert text",
        })}
      />

      <div className="flex flex-col gap-2 md:flex-row">
        <Button disabled={isPosting} className="w-full px-3 py-1 md:w-auto">
          {isPosting ? <SpinnerMini /> : "Add post"}
        </Button>
        <input
          type="file"
          id="image"
          accept="image/*"
          className="text-primary-400 transition duration-300 file:rounded-md file:border-solid file:border-main file:bg-primary-700 file:px-2 file:py-1 file:text-white hover:file:cursor-pointer hover:file:bg-primary-600"
          {...register("image")}
        />
      </div>
    </form>
  );
}

export default AddPost;
