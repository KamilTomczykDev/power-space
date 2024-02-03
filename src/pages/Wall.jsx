import { usePosts } from "../features/posts/usePosts";

import AddPost from "../features/posts/AddPost";
import Posts from "../features/posts/Posts";
import AppHeading from "../ui/AppHeading";
import Spinner from "../ui/Spinner";

function Wall() {
  const { posts, isLoading } = usePosts();

  if (isLoading)
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Spinner color={"#1be053"} />
      </div>
    );
  return (
    <>
      <AppHeading title="Wall">
        Scroll through the sea of workout related posts.
      </AppHeading>
      <div className="flex flex-col gap-10">
        <AddPost />
        <Posts posts={posts} />
      </div>
    </>
  );
}

export default Wall;
