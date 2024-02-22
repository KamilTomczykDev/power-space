import React, { lazy, Suspense, useState } from "react";
import { FaUserFriends } from "react-icons/fa";
import { useCurrentProfile } from "../profiles/useCurrentProfile";
import { countScore, formatDate } from "../../utils/helpers";
import Spinner from "../../ui/Spinner";
import RankingUsername from "../ranking/RankingUsername";
import HoverInfo from "../../ui/HoverInfo";
import PostContextMenu from "./PostContextMenu";

const PostContent = lazy(() => import("./PostContent"));

const PostsItem = ({ post, profiles }) => {
  const [isEditing, setIsEditing] = useState(false);
  const { id: postId, content, createdAt, profileId, image } = post;
  const { profile: currentProfile, isLoading } = useCurrentProfile();

  if (isLoading) return null;

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
  const isFriend = friends.includes(profileId);

  return (
    <div className="flex w-full max-w-[600px] flex-col justify-start gap-4 rounded-sm bg-primary-800 p-2 md:p-4">
      <div className="flex w-full justify-between">
        <label className="font-semibold text-secondary-400 md:text-lg">
          <RankingUsername score={authorsScore} id={profileId}>
            {authorsUsername}
          </RankingUsername>
        </label>
        <div className="flex items-center gap-2 text-secondary-400">
          {isFriend && (
            <HoverInfo text={"Friend"}>
              <FaUserFriends />
            </HoverInfo>
          )}
          <span className="text-primary-400">{formatDate(createdAt)}</span>
          {isAuthor && (
            <PostContextMenu postId={postId} setIsEditing={setIsEditing} />
          )}
        </div>
      </div>
      <Suspense
        fallback={
          <div className="flex w-full items-center justify-center text-secondary-400">
            <Spinner />
          </div>
        }
      >
        <PostContent
          postId={postId}
          setIsEditing={setIsEditing}
          isEditing={isEditing}
          image={image}
          content={content}
        />
      </Suspense>
    </div>
  );
};

export default PostsItem;
