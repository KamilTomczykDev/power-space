import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCurrentUser } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: () => {
      toast.success("Data updated successfully");
      queryClient.invalidateQueries({ queryKey: ["user"] });
      // queryClient.setQueriesData(["user"], user);
    },
    onError: (err) => {
      toast.error(`Data updated unsuccessfully: ${err}`);
    },
  });

  return { updateUser, isUpdating };
}
