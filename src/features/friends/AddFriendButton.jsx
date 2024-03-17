import Button from "../../ui/Button";
import SpinnerMini from "../../ui/SpinnerMini";
import { useUpdateProfile } from "../profiles/useUpdateProfile";

function AddFriendButton({ friends, currentProfileId, id }) {
  const { updateProfile, isUpdating } = useUpdateProfile();

  const isFriend = friends.includes(id);

  const handleAddFriend = () => {
    const updatedFriends = [...friends, id];
    updateProfile({ stats: { friends: updatedFriends }, id: currentProfileId });
  };

  const handleRemoveFriend = () => {
    const updatedFriends = friends.filter((friendId) => friendId !== id);
    updateProfile({ stats: { friends: updatedFriends }, id: currentProfileId });
  };

  const handleClick = () => {
    if (isFriend) {
      handleRemoveFriend();
    } else {
      handleAddFriend();
    }
  };

  return (
    <Button onClick={handleClick} disabled={isUpdating}>
      {isUpdating ? <SpinnerMini /> : isFriend ? "Remove friend" : "Add friend"}
    </Button>
  );
}

export default AddFriendButton;
