import { formatDate } from "../../utils/helpers";
import { useCurrentProfile } from "../profiles/useCurrentProfile";
import DeletePost from "./DeletePost";
import PostContent from "./PostContent";

function PostsItem({ post }) {
  const {
    id: postId,
    content,
    createdAt,
    profileUsername,
    profileId,
    image,
  } = post;
  const { profile, isLoading } = useCurrentProfile();

  if (isLoading) return;

  const [{ id }] = profile;
  const isAuthor = id === profileId;

  return (
    <div className="flex w-full max-w-[800px] flex-col items-start justify-start gap-4 rounded-md bg-stone-700 p-4">
      <div className="flex w-full justify-between gap-10">
        <label className="font-semibold text-green-400 md:text-lg">
          {profileUsername}
        </label>
        <span className="text-stone-400">{formatDate(createdAt)}</span>
      </div>
      <PostContent image={image} content={content} />
      {isAuthor && <DeletePost id={postId} />}
    </div>
  );
}

export default PostsItem;
