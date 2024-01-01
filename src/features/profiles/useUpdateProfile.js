import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProfile as updateProfileApi } from "../../services/apiProfiles";
import toast from "react-hot-toast";

export function useUpdateProfile() {
  const queryClient = useQueryClient();

  const { mutate: updateProfile, isLoading: isUpdating } = useMutation({
    mutationFn: ({ stats, id }) => updateProfileApi(stats, id),
    onSuccess: (data) => {
      console.log(data);
      toast.success("Stats updated successfully");
      queryClient.invalidateQueries({ queryKey: ["profile"] });
    },
    onError: (err) => toast.error(`Stats updated unsuccessfully: ${err}`),
  });

  return { updateProfile, isUpdating };
}
