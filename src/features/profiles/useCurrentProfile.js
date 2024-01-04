import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../../services/apiProfiles";
import { useUser } from "../authentication/useUser";
import toast from "react-hot-toast";

export function useCurrentProfile() {
  const { user } = useUser();
  const { data: profile, isLoading } = useQuery({
    queryKey: ["profile"],
    queryFn: () => getProfile(user.id),
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("We couldn't get your profile data");
    },
  });

  return { profile, isLoading };
}
