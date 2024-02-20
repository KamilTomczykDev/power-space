import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editPost as editPostApi } from "../../services/apiPosts";
import toast from "react-hot-toast";
import useEditPostContext from "../../hooks/useEditPostContext";

export function useEditPost() {
  const { setIsEditing } = useEditPostContext();
  const queryClient = useQueryClient();

  const { mutate: editPost, isLoading: isEditing } = useMutation({
    mutationFn: ({ id, newData }) => editPostApi(id, newData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      toast.success("Post edited successfully");
      setIsEditing(false);
    },
    onError: () => toast.error("We could not edit your post"),
  });

  return { editPost, isEditing };
}
