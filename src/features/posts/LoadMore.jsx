import { IoReloadCircle } from "react-icons/io5";
import { useSearchParams } from "react-router-dom";
import { usePosts } from "./usePosts";
import { useState } from "react";

function LoadMore() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const [state, setState] = useState(false);
  const { posts, isLoading } = usePosts();
  if (isLoading) return;

  function handleClick() {
    searchParams.set("page", currentPage + 1);
    setSearchParams(searchParams);
    console.log(posts);
    //forcing compmonent to rerender
    setState(!state);
  }
  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-4 bg-stone-800 p-4 text-3xl text-green-400 transition duration-300 hover:bg-stone-700"
    >
      load more <IoReloadCircle size={50} />
    </button>
  );
}

export default LoadMore;
