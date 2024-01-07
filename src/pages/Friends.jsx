import { useCurrentProfile } from "../features/profiles/useCurrentProfile";
import { useProfiles } from "../features/profiles/useProfiles";
import RankingTable from "../features/ranking/RankingTable";
import AppHeading from "../ui/AppHeading";

import Spinner from "../ui/Spinner";

function Friends() {
  const { profile, isLoading } = useCurrentProfile();
  const { profiles, isLoading: areLoading } = useProfiles();
  let friendsArray = [];

  if (isLoading || areLoading)
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Spinner color={"#1be053"} />
      </div>
    );

  const [{ friends }] = profile;
  console.log(friends.length);
  console.log(friends);

  if (friends.length) {
    friends.forEach((id) => {
      const friendProfile = profiles.find((profile) => profile.id === id);
      console.log("friend", friendProfile);
      friendsArray = [...friendsArray, friendProfile];
    });
  }

  return (
    <>
      <AppHeading title="Friend">
        {friends.length
          ? "Take a look on your friends group."
          : "We're sorry to say this but You have no friends"}
      </AppHeading>
      {friends.length && <RankingTable profiles={friendsArray} />}
    </>
  );
}

export default Friends;
