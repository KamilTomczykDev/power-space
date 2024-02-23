import Button from "../../ui/Button";
import SpinnerMini from "../../ui/SpinnerMini";
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
    }
  }

  return (
    <Button onClick={handleClick} disabled={isUpdating}>
      {isUpdating ? <SpinnerMini /> : isFriend ? "Remove friend" : "Add friend"}
    </Button>
  );
}

export default AddFriendButton;
