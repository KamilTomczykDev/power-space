import { IoReloadCircle } from "react-icons/io5";
import { useSearchParams } from "react-router-dom";
import { usePosts } from "./usePosts";

import Button from "../../ui/Button";

function LoadMore() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const { posts, isLoading } = usePosts();
  if (isLoading) return;

  function handleClick() {
    searchParams.set("page", currentPage + 1);
    setSearchParams(searchParams);
    console.log(posts);
  }
  return (
    <Button onClick={handleClick} className="flex items-center gap-4 text-3xl">
      Load more <IoReloadCircle size={50} />
    </Button>
  );
}

export default LoadMore;
