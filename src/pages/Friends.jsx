import { useCurrentProfile } from "../features/profiles/useCurrentProfile";
import { useProfiles } from "../features/profiles/useProfiles";
import { useInView } from "react-intersection-observer";

import AppHeading from "../ui/AppHeading";
import FriendsRow from "../features/friends/FriendsRow";
import Spinner from "../ui/Spinner";

function Friends() {
  const [ref, inView] = useInView({
    threshold: 0.2,
  });
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

  if (friends.length) {
    friends.forEach((id) => {
      const friendProfile = profiles.find((profile) => profile.id === id);
      console.log("friend", friendProfile);
      friendsArray = [...friendsArray, friendProfile];
    });
  }

  return (
    <>
      <AppHeading title="Friends">
        {friends.length
          ? "Take a look on your friends group."
          : "We're sorry to say this but You have no friends :("}
      </AppHeading>
      <div
        ref={ref}
        className={`flex flex-col gap-4 transition duration-1000 ${
          inView ? "" : "translate-y-10 opacity-0"
        }`}
      >
        {friends.length !== 0 &&
          friendsArray.map((profile) => (
            <FriendsRow key={profile.id} profile={profile} />
          ))}
      </div>
    </>
  );
}

export default Friends;
