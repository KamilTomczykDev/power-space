import { useQuery } from "@tanstack/react-query";
import { getProfiles } from "../../services/apiProfiles";
import { useSearchParams } from "react-router-dom";

export function useProfiles() {
  const [searchParams] = useSearchParams();

  const filterValue = searchParams.get("filter");
  const filter =
    !filterValue || filterValue === "all"
      ? { field: "filter", value: "all" }
      : { field: "filter", value: filterValue };

  const { data: profiles, isLoading } = useQuery({
    queryKey: ["profiles", filter],
    queryFn: (filter) => getProfiles({ filter }),
  });

  console.log(profiles);

  return { profiles, isLoading };
}
