import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProfile as updateProfileApi } from "../../services/apiProfiles";
import toast from "react-hot-toast";

export function useUpdateProfile() {
  const queryClient = useQueryClient();

  const { mutate: updateProfile, isLoading: isUpdating } = useMutation({
    mutationFn: ({ stats, id }) => updateProfileApi(stats, id),
    onSuccess: () => {
      toast.success("Data updated successfully");
      queryClient.invalidateQueries({ queryKey: ["currentProfile"] });
    },
    onError: (err) => toast.error(`Data updated unsuccessfully: ${err}`),
  });

  return { updateProfile, isUpdating };
}
