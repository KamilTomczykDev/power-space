import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../../services/apiPosts";
import { useSearchParams } from "react-router-dom";

export function usePosts() {
  const [searchParams] = useSearchParams();
  const currentPage = !searchParams.get("page") ? 1 : searchParams.get("page");
  const { data: posts, isLoading } = useQuery({
    queryKey: ["posts", currentPage],
    queryFn: () => getPosts(currentPage),
  });

  return { posts, isLoading };
}
