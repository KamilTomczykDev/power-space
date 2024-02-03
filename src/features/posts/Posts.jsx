import PostsItem from "./PostsItem";

function Posts({ posts }) {
  return (
    <div className="flex flex-col items-center gap-6">
      {posts.map((post) => (
        <PostsItem post={post} key={post.id} />
      ))}
    </div>
  );
}

export default Posts;
