import PostsItem from "./PostsItem";

function Posts({ posts, profiles }) {
  const sortedPosts = posts.sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });
  return (
    <div className="flex flex-col items-center gap-6">
      {sortedPosts.map((post) => (
        <PostsItem post={post} profiles={profiles} key={post.id} />
      ))}
    </div>
  );
}

export default Posts;
