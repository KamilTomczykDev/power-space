import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getProfile as getProfileApi } from "../../services/apiProfiles";
import toast from "react-hot-toast";

export function useProfile() {
  const queryClient = useQueryClient();
  const { mutate: getProfile, isLoading } = useMutation({
    mutationFn: (id) => getProfileApi(id),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["profile"] });
      console.log(data);
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("We couldn't get your profile data");
    },
  });
  return { getProfile, isLoading };
}
