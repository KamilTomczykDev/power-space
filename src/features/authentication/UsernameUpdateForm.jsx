import { useUser } from "./useUser";
import { useUpdateUser } from "./useUpdateUser";
import { useCurrentProfile } from "../profiles/useCurrentProfile";
import { updateProfileUsername } from "../../services/apiProfiles";
import { useForm } from "react-hook-form";

import AppFormRow from "../../ui/AppFormRow";
import FormButtons from "../../ui/FormButtons";

function UsernameUpdateForm() {
  const { register, formState, handleSubmit } = useForm();
  const { errors } = formState;

  const {
    user: {
      email,
      user_metadata: { username: currentUsername },
    },
  } = useUser();

  const { profile } = useCurrentProfile();
  const [{ id }] = profile;
  const { updateUser, isUpdating } = useUpdateUser();

  function onSubmit({ username }) {
    console.log({ username });

    updateUser(
      { username },
      {
        onSuccess: () => {
          updateProfileUsername(id, username);
        },
      },
    );
  }

  return (
    <>
      <label className="text-lg font-semibold text-primary-400 sm:text-2xl">
        Update user data:
      </label>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-4 rounded-md bg-primary-800 p-4 sm:items-end sm:p-6 md:gap-8"
      >
        <AppFormRow label="User e-mail">
          <input
            className="rounded-md border-1 border-main bg-primary-700 p-2 disabled:opacity-60 sm:max-w-[300px]"
            type="email"
            placeholder={email}
            disabled
          />
        </AppFormRow>
        <AppFormRow error={errors?.username?.message} label="Username">
          <input
            className="rounded-md border-1 border-main bg-primary-700 p-2 text-white disabled:opacity-60 sm:max-w-[300px]"
            type="text"
            id="username"
            placeholder={currentUsername}
            disabled={isUpdating}
            {...register("username", {
              required: "This field is required",
              maxLength: {
                value: 15,
                message: "Max. 15 characters",
              },
            })}
          />
        </AppFormRow>
        <FormButtons isUpdating={isUpdating} />
      </form>
    </>
  );
}

export default UsernameUpdateForm;
