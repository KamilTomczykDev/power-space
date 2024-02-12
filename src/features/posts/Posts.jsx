import LoadMore from "./LoadMore";
import PostsItem from "./PostsItem";

function Posts({ posts, profiles }) {
  return (
    <div className="flex flex-col items-center gap-6">
      {posts.map((post) => (
        <PostsItem post={post} profiles={profiles} key={post.id} />
      ))}
      <LoadMore />
    </div>
  );
}

export default Posts;
