import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editPost as editPostApi } from "../../services/apiPosts";
import toast from "react-hot-toast";

export function useEditPost() {
  const queryClient = useQueryClient();
  const { mutate: editPost, isLoading: isEditing } = useMutation({
    mutationFn: (id, content) => editPostApi(id, content),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      toast.success("Post edited successfully");
    },
    onError: () => toast.error("We could not edit your post"),
  });

  return { editPost, isEditing };
}
