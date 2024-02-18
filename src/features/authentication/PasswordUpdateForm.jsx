import { useForm } from "react-hook-form";
import { useUpdateUser } from "./useUpdateUser";

import AppFormRow from "../../ui/AppFormRow";
import FormButtons from "../../ui/FormButtons";

function PasswordUpdateForm() {
  const { register, formState, getValues, handleSubmit } = useForm();
  const { errors } = formState;
  const { updateUser, isUpdating } = useUpdateUser();

  function onSubmit({ password }) {
    console.log({ password });
    updateUser({ password });
  }

  return (
    <>
      <label className="text-lg font-semibold text-primary-400 sm:text-2xl">
        Update user password:
      </label>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-4 rounded-md bg-primary-800 p-4 sm:items-end sm:p-6 md:gap-8"
      >
        <AppFormRow error={errors?.password?.message} label="New password">
          <input
            className="rounded-md border-1 border-main bg-primary-700 p-2 text-white disabled:opacity-60 sm:max-w-[300px]"
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
            className="rounded-md border-1 border-main bg-primary-700 p-2 text-white disabled:opacity-60 sm:max-w-[300px]"
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
        <FormButtons isUpdating={isUpdating} />
      </form>
    </>
  );
}

export default PasswordUpdateForm;
