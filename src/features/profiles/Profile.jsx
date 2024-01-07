import { useParams } from "react-router-dom";
import { useProfiles } from "./useProfiles";
import Spinner from "../../ui/Spinner";
import AppHeading from "../../ui/AppHeading";
import PrimaryStats from "../../ui/PrimaryStats";
import SecondaryStats from "../../ui/SecondaryStats";
import { useUpdateProfile } from "./useUpdateProfile";
import { useCurrentProfile } from "./useCurrentProfile";
function Profile() {
  const { id } = useParams();
  const { profiles, isLoading: areLoading } = useProfiles();
  const { profile: currentProfile, isLoading } = useCurrentProfile();

  const { updateProfile, isUpdating } = useUpdateProfile();

  if (areLoading || isLoading)
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Spinner color={"#1be053"} />
      </div>
    );

  const [{ id: currentProfileId, friends }] = currentProfile;

  const profile = profiles.find((profile) => profile.id === id);

  const isFriend = friends.some((arrId) => arrId === id);
  //   console.log(isFriend);

  function handleClick() {
    if (!isFriend) {
      updateProfile({
        stats: { friends: [...friends, id] },
        id: currentProfileId,
      });
      console.log(friends);
    } else {
      const updatedArray = friends.filter((friend) => friend !== id);
      updateProfile({
        stats: { friends: [...updatedArray] },
        id: currentProfileId,
      });
      console.log(friends);
    }
  }

  return (
    <>
      <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-center sm:gap-0">
        <AppHeading title={`${profile.username}'s profile`}></AppHeading>
        <button
          onClick={handleClick}
          disabled={isUpdating}
          className="flex items-center justify-center rounded-md border-2 border-green-400 bg-green-900 px-4 py-2 font-semibold text-white hover:bg-green-800 disabled:opacity-60"
        >
          {isFriend ? "Remove friend" : "Add friend"}
        </button>
      </div>
      <PrimaryStats profile={[profile]} />
      <SecondaryStats profile={[profile]} />
    </>
  );
}

export default Profile;
