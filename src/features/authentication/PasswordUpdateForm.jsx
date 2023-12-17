import { useForm } from "react-hook-form";
import { useUpdateUser } from "./useUpdateUser";

import AppFormRow from "../../ui/AppFormRow";
import SpinnerMini from "../../ui/SpinnerMini";

function PasswordUpdateForm() {
  const { register, formState, getValues, handleSubmit } = useForm();
  const { errors } = formState;
  const { updateUser, isUpdating } = useUpdateUser();

  function onSubmit({ password }) {
    updateUser({ password });
  }

  return (
    <>
      <label className="text-lg font-semibold text-stone-400 sm:text-2xl">
        Update user password:
      </label>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-4 rounded-md bg-stone-800 p-4 sm:items-end sm:p-6 md:gap-8"
      >
        <AppFormRow error={errors?.password?.message} label="New password">
          <input
            className="rounded-md border-2 border-stone-400 bg-stone-700 p-2 text-white disabled:opacity-60 sm:max-w-[300px]"
            type="password"
            id="password"
            placeholder="Password"
            disabled={isUpdating}
            {...register("password", {
              required: "This field is required",
              minLenght: {
                value: 8,
                message: "Min, 8 characters",
              },
            })}
          />
        </AppFormRow>
        <AppFormRow
          error={errors?.passwordConfirm?.message}
          label="Confirm password"
        >
          <input
            className="rounded-md border-2 border-stone-400 bg-stone-700 p-2 text-white disabled:opacity-60 sm:max-w-[300px]"
            type="password"
            placeholder="Confirm password"
            id="passwordConfirm"
            disabled={isUpdating}
            {...register("passwordConfirm", {
              required: "This field is required",
              validate: (value) =>
                value === getValues().password || "Passwords need to match",
            })}
          />
        </AppFormRow>
        <div className="flex gap-2">
          <button
            type="reset"
            disabled={isUpdating}
            className="flex items-center  justify-center rounded-md border-2 border-stone-500 bg-stone-700 px-4 py-2 text-white hover:bg-stone-600 sm:w-[80px]"
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

export default PasswordUpdateForm;
