import { useUpdateProfile } from "../profiles/useUpdateProfile";

function AddFriendButton({ friends, currentProfileId, id }) {
  const { updateProfile, isUpdating } = useUpdateProfile();
  const isFriend = friends.some((arrId) => arrId === id);

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
    <button
      onClick={handleClick}
      disabled={isUpdating}
      className="flex items-center justify-center rounded-md border-2 border-green-400 bg-green-900 px-4 py-2 font-semibold text-white hover:bg-green-800 disabled:opacity-60"
    >
      {isFriend ? "Remove friend" : "Add friend"}
    </button>
  );
}

export default AddFriendButton;
