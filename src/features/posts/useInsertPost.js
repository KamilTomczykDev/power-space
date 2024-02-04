import { useMutation, useQueryClient } from "@tanstack/react-query";
import { insertPost as insertPostApi } from "../../services/apiPosts";
import toast from "react-hot-toast";

export function useInsertPost() {
  const queryClient = useQueryClient();
  const { mutate: insertPost, isLoading: isPosting } = useMutation({
    mutationFn: (newPost) => insertPostApi(newPost),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
      toast.success("Created new post");
    },
    onError: () => toast.error("Coudn't create a new post"),
  });

  return { insertPost, isPosting };
}
