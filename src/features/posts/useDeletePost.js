import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePost as deletePostApi } from "../../services/apiPosts";
import toast from "react-hot-toast";

export function useDeletePost() {
  const queryClient = useQueryClient();
  const { mutate: deletePost, isLoading: isDeleting } = useMutation({
    mutationFn: (id) => deletePostApi(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
      toast.success("Post deleted successfully");
    },
    onError: () => toast.error("Post deleted unsuccessfully"),
  });

  return { deletePost, isDeleting };
}
