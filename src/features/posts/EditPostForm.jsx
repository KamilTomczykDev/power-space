import { useForm } from "react-hook-form";
import { useEditPost } from "./useEditPost";

import Button from "../../ui/Button";
import SpinnerMini from "../../ui/SpinnerMini";

function EditPostForm({ content, postId: id }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { editPost, isEditing } = useEditPost();

  function onSubmit(newData) {
    editPost({ id, newData });
    console.log(id, newData);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {errors?.content?.message && (
        <div className="rounded-md text-xs text-red-400 md:text-xl">
          {errors?.content?.message}
        </div>
      )}
      <textarea
        className="w-full resize-none rounded-md border-1 border-main bg-primary-900 p-2 text-white disabled:opacity-60"
        id="content"
        disabled={isEditing}
        defaultValue={content}
        placeholder="Your toughts about last workout..."
        {...register("content", { required: "Instert text" })}
      />
      <Button disabled={isEditing}>
        {isEditing ? <SpinnerMini /> : "Edit post"}
      </Button>
    </form>
  );
}

export default EditPostForm;
