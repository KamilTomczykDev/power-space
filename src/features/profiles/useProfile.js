import { useQuery } from "@tanstack/react-query";
import { getCurrentProfile } from "../../services/apiProfiles";
// import { useUser } from "../authentication/useUser";

export function useProfile() {
  //   const { user } = useUser();

  const { isLoading, data, isSuccess } = useQuery(
    ["profiles"],
    getCurrentProfile,
  );

  return { data, isLoading, isSuccess };
}
