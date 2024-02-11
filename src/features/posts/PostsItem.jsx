import { Suspense, lazy } from "react";
import { countScore, formatDate } from "../../utils/helpers";
import { useCurrentProfile } from "../profiles/useCurrentProfile";
import { FaUserFriends } from "react-icons/fa";

import DeletePost from "./DeletePost";
import Spinner from "../../ui/Spinner";
import RankingUsername from "../ranking/RankingUsername";
import HoverInfo from "../../ui/HoverInfo";

const PostContent = lazy(() => import("./PostContent"));

function PostsItem({ post, profiles }) {
  const { id: postId, content, createdAt, profileId, image } = post;

  const { profile: currentProfile, isLoading } = useCurrentProfile();

  if (isLoading) return;

  const [{ id: currentProfileId, friends }] = currentProfile;

  const {
    username: authorsUsername,
    squat,
    bench,
    deadlift,
    weight,
  } = profiles.find((profile) => profile.id === profileId);

  const authorsScore = countScore(squat, bench, deadlift, weight);

  const isAuthor = currentProfileId === profileId;

  const isFriend = friends.some((friendId) => friendId === profileId);

  return (
    <div className="flex w-full max-w-[800px] flex-col items-start justify-start gap-4 rounded-sm bg-stone-800 p-2 md:p-4">
      <div className="flex w-full justify-between">
        <label className="font-semibold text-green-400 md:text-lg">
          <RankingUsername score={authorsScore} id={profileId}>
            {authorsUsername}
          </RankingUsername>
        </label>
        <div className="flex items-center gap-2 text-green-400">
          {isFriend && (
            <HoverInfo text={"You are friends"}>
              <FaUserFriends />
            </HoverInfo>
          )}
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
