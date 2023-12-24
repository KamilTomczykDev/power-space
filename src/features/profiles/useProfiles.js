import { useQuery } from "@tanstack/react-query";
import { getProfiles } from "../../services/apiProfiles";

export function useProfiles() {
  const { data: profiles, isLoading } = useQuery({
    queryKey: ["profiles"],
    queryFn: getProfiles,
  });

  console.log(profiles);

  return { profiles, isLoading };
}
