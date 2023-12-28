import { useUser } from "./useUser";
import { useUpdateUser } from "./useUpdateUser";
import { useState } from "react";
// import { useUpdateProfileUsername } from "../profiles/useUpdateProfileUsername";
import { useProfile } from "../profiles/useProfile";

import AppFormRow from "../../ui/AppFormRow";
import SpinnerMini from "../../ui/SpinnerMini";
import { updateProfileUsername } from "../../services/apiProfiles";

function UsernameUpdateForm() {
  const {
    user: {
      email,
      user_metadata: { username: currentUsername },
    },
  } = useUser();

  const { profile } = useProfile();

  const [{ id }] = profile;

  const [username, setUsername] = useState(currentUsername);

  const { updateUser, isUpdating } = useUpdateUser();
  // const { updateProfileUsername } = useUpdateProfileUsername();

  function handleSubmit(e) {
    e.preventDefault();
    if (!username) return;

    updateUser(
      { username },
      {
        onSuccess: () => {
          updateProfileUsername(id, username);
        },
      },
    );
  }

  function handleCancel() {
    setUsername(currentUsername);
  }

  return (
    <>
      <label className="text-lg font-semibold text-stone-400 sm:text-2xl">
        Update user data:
      </label>
      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-col gap-4 rounded-md bg-stone-800 p-4 sm:items-end sm:p-6 md:gap-8"
      >
        <AppFormRow label="User e-mail">
          <input
            className="rounded-md border-2 border-stone-600 bg-stone-700 p-2 disabled:opacity-60 sm:max-w-[300px]"
            type="email"
            placeholder={email}
            disabled
          />
        </AppFormRow>
        <AppFormRow label="Username">
          <input
            className="rounded-md border-2 border-stone-400 bg-stone-700 p-2 text-white disabled:opacity-60 sm:max-w-[300px]"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            disabled={isUpdating}
          />
        </AppFormRow>
        <div className="flex gap-2">
          <button
            type="reset"
            disabled={isUpdating}
            onClick={handleCancel}
            className="flex items-center justify-center  rounded-md border-2 border-stone-500 bg-stone-700 px-4 py-2 text-white hover:bg-stone-600 disabled:opacity-60 sm:w-[80px]"
          >
            Cancel
          </button>
          <button
            disabled={isUpdating}
            className="flex items-center justify-center rounded-md border-2 border-green-400 bg-green-900 px-4 py-2 font-semibold text-white hover:bg-green-800 disabled:opacity-60 sm:w-[120px]"
          >
            {isUpdating ? <SpinnerMini /> : "Submit"}
          </button>
        </div>
      </form>
    </>
  );
}

export default UsernameUpdateForm;
