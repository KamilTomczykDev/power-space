import { useForm } from "react-hook-form";
import { useProfile } from "./useProfile";

import AppFormRow from "../../ui/AppFormRow";
import FormButtons from "../../ui/FormButtons";
import { useUpdateProfile } from "./useUpdateProfile";

function UpdateProfileForm() {
  const { profile } = useProfile();
  const { updateProfile, isUpdating } = useUpdateProfile();
  const [
    {
      id,
      squat_pr: squatPr,
      bench_pr: benchPr,
      deadlift_pr: deadliftPr,
      age,
      weight,
      height,
      training_since: since,
    },
  ] = profile;
  const { register, formState, reset, handleSubmit } = useForm({
    defaultValues: {
      squat: squatPr,
      deadlift: deadliftPr,
      bench: benchPr,
      age,
      weight,
      height,
      since,
    },
  });
  const { errors } = formState;

  function handleCancel() {
    reset();
  }

  function onSubmit({ squat, deadlift }) {
    console.log(squat, deadlift);
    updateProfile(id, squat, deadlift);
  }

  return (
    <div className="flex w-full flex-col">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-4 rounded-md bg-stone-800 p-4 sm:items-end sm:p-8 md:gap-8"
      >
        <AppFormRow
          error={errors?.squat?.message}
          label="Squat Personal Record"
        >
          <input
            className="rounded-md border-2 border-stone-400 bg-stone-700 p-2 text-white disabled:opacity-60 sm:max-w-[300px]"
            type="number"
            id="squat"
            placeholder="New squat PR"
            disabled={isUpdating}
            {...register("squat", {
              required: "This field is required",
              maxLenght: {
                value: 3,
                message: "Max. 3 numbers",
              },
            })}
          />
        </AppFormRow>
        <AppFormRow
          error={errors?.bench?.message}
          label="Bench Personal Record"
        >
          <input
            className="w-full rounded-md border-2 border-stone-400 bg-stone-700 p-2 text-white disabled:opacity-60 sm:max-w-[300px]"
            type="number"
            id="bench"
            placeholder="New bench PR"
            disabled={isUpdating}
            {...register("bench", {
              required: "This field is required",
              maxLenght: {
                value: 3,
                message: "Max. 3 numbers",
              },
            })}
          />
        </AppFormRow>
        <AppFormRow
          error={errors?.deadlift?.message}
          label="Deadlift Personal Record"
        >
          <input
            className="rounded-md border-2 border-stone-400 bg-stone-700 p-2 text-white disabled:opacity-60 sm:max-w-[300px]"
            type="number"
            id="deadlift"
            placeholder="New deadlift PR"
            disabled={isUpdating}
            {...register("deadlift", {
              required: "This field is required",
              maxLenght: {
                value: 3,
                message: "Max. 3 numbers",
              },
            })}
          />
        </AppFormRow>
        <AppFormRow error={errors?.age?.message} label="Age (yo)">
          <input
            className="rounded-md border-2 border-stone-400 bg-stone-700 p-2 text-white disabled:opacity-60 sm:max-w-[300px]"
            type="number"
            id="age"
            placeholder="Your age"
            disabled={isUpdating}
            {...register("age", {
              required: "This field is required",
              maxLenght: {
                value: 2,
                message: "Max. 99 years old",
              },
            })}
          />
        </AppFormRow>
        <AppFormRow error={errors?.weight?.message} label="Weight">
          <input
            className="rounded-md border-2 border-stone-400 bg-stone-700 p-2 text-white disabled:opacity-60 sm:max-w-[300px]"
            type="number"
            id="weight"
            placeholder="Your weight"
            disabled={isUpdating}
            {...register("weight", {
              required: "This field is required",
              maxLenght: {
                value: 3,
                message: "Max. 999lbs",
              },
            })}
          />
        </AppFormRow>
        <AppFormRow error={errors?.height?.message} label="Height">
          <input
            className="rounded-md border-2 border-stone-400 bg-stone-700 p-2 text-white disabled:opacity-60 sm:max-w-[300px]"
            type="number"
            id="height"
            placeholder="Your height"
            disabled={isUpdating}
            {...register("height", {
              required: "This field is required",
              maxLenght: {
                value: 3,
                message: "Max. 3 numbers",
              },
            })}
          />
        </AppFormRow>
        <AppFormRow error={errors?.since?.message} label="Training since">
          <input
            className="rounded-md border-2 border-stone-400 bg-stone-700 p-2 text-white disabled:opacity-60 sm:max-w-[300px]"
            type="number"
            id="since"
            placeholder="When did you start?"
            disabled={isUpdating}
            {...register("since", {
              required: "This field is required",
              maxLength: {
                value: 4,
                message: "Max. 4 numbers",
              },
            })}
          />
        </AppFormRow>

        <FormButtons onCancel={handleCancel} isUpdating={isUpdating} />
      </form>
    </div>
  );
}

export default UpdateProfileForm;
