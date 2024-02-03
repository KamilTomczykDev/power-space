import SpinnerMini from "../../ui/SpinnerMini";
import { formatDate } from "../../utils/helpers";
import { useProfiles } from "../profiles/useProfiles";

function PostsItem({ post }) {
  const { profileId, content, createdAt } = post;

  const { profiles, isLoading } = useProfiles();

  if (isLoading) return <SpinnerMini />;

  console.log(profiles);
  const profile = profiles.find((profile) => profile.id === profileId);

  return (
    <div className="flex max-w-[800px] flex-col gap-4 rounded-md bg-stone-700 p-4">
      <div className="flex justify-between">
        <label className="font-semibold text-green-400 md:text-lg">
          {profile.username}
        </label>
        <span className="text-stone-400">{formatDate(createdAt)}</span>
      </div>
      <div className="text-white md:text-xl">{content}</div>
    </div>
  );
}

export default PostsItem;
