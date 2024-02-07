import { useParams } from "react-router-dom";
import { useProfiles } from "./useProfiles";
import { useCurrentProfile } from "./useCurrentProfile";
import { FaArrowLeft } from "react-icons/fa6";

import Spinner from "../../ui/Spinner";
import AppHeading from "../../ui/AppHeading";
import PrimaryStats from "../../ui/PrimaryStats";
import SecondaryStats from "../../ui/SecondaryStats";
import LinkButton from "../../ui/LinkButton";
import AddFriendButton from "../friends/AddFriendButton";

function Profile() {
  const { id } = useParams();
  const { profiles, isLoading: areLoading } = useProfiles();
  const { profile: currentProfile, isLoading } = useCurrentProfile();

  if (areLoading || isLoading)
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Spinner color={"#1be053"} />
      </div>
    );

  const [{ id: currentProfileId, friends }] = currentProfile;
  const profile = profiles.find((profile) => profile.id === id);

  return (
    <>
      <LinkButton to={-1}>
        <FaArrowLeft />
        Go back
      </LinkButton>
      <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-center sm:gap-0">
        <AppHeading title={`${profile.username}'s profile`}></AppHeading>
        <AddFriendButton
          currentProfileId={currentProfileId}
          friends={friends}
          id={id}
        />
      </div>
      <PrimaryStats profile={[profile]} />
      <SecondaryStats profile={[profile]} />
    </>
  );
}

export default Profile;
