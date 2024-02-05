import { Suspense, lazy } from "react";
import { formatDate } from "../../utils/helpers";
import { useCurrentProfile } from "../profiles/useCurrentProfile";

import DeletePost from "./DeletePost";
import Spinner from "../../ui/Spinner";

const PostContent = lazy(() => import("./PostContent"));

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
    <div className="flex w-full max-w-[800px] flex-col items-start justify-start gap-4 rounded-sm bg-stone-800 p-2 md:p-4">
      <div className="flex w-full justify-between gap-10">
        <label className="font-semibold text-green-400 md:text-lg">
          {profileUsername}
        </label>
        <div className="flex gap-2">
          {isAuthor && <DeletePost id={postId} />}
          <span className="text-stone-400">{formatDate(createdAt)}</span>
        </div>
      </div>
      <Suspense
        fallback={
          <div className="flex w-full items-center justify-center text-green-400">
            <Spinner />
          </div>
        }
      >
        <PostContent image={image} content={content} />
      </Suspense>
    </div>
  );
}

export default PostsItem;
