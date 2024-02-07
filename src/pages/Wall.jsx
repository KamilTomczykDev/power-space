import { usePosts } from "../features/posts/usePosts";
import { useProfiles } from "../features/profiles/useProfiles";
import AddPost from "../features/posts/AddPost";
import Posts from "../features/posts/Posts";
import AppHeading from "../ui/AppHeading";
import Spinner from "../ui/Spinner";

function Wall() {
  const { posts, arePostsLoading } = usePosts();
  const { profiles, isLoading } = useProfiles();

  if (isLoading || arePostsLoading)
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
        <Posts posts={posts} profiles={profiles} />
      </div>
    </>
  );
}

export default Wall;
