import { usePosts } from "../features/posts/usePosts";
import { useProfiles } from "../features/profiles/useProfiles";
import { useInView } from "react-intersection-observer";

import AddPost from "../features/posts/AddPost";
import Posts from "../features/posts/Posts";
import AppHeading from "../ui/AppHeading";
import Spinner from "../ui/Spinner";

function Wall() {
  const [ref, inView] = useInView();
  const { posts, isLoading: arePostsLoading } = usePosts();
  const { profiles, isLoading } = useProfiles();

  if (isLoading || arePostsLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Spinner color={"#1be053"} />
      </div>
    );
  }

  return (
    <>
      <AppHeading title="Wall">
        Scroll through the sea of workout related posts.
      </AppHeading>
      <div
        ref={ref}
        className={`flex flex-col gap-10 transition duration-1000 ${
          inView ? "" : "translate-y-10 opacity-0"
        }`}
      >
        <AddPost />
        <Posts posts={posts} profiles={profiles} />
      </div>
    </>
  );
}

export default Wall;
