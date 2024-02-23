import { useForm } from "react-hook-form";
import { useCurrentProfile } from "./useCurrentProfile";
import { useUpdateProfile } from "./useUpdateProfile";
import { convertToKilos } from "../../utils/helpers";
import useUnits from "../../hooks/useUnits";

import AppFormRow from "../../ui/AppFormRow";
import FormButtons from "../../ui/FormButtons";

function UpdateProfileForm() {
  const { unit } = useUnits();
  const { profile } = useCurrentProfile();
  const [{ id, squat, bench, deadlift, age, weight, height, training_since }] =
    profile;
  const { updateProfile, isUpdating } = useUpdateProfile();
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm({
    defaultValues: {
      squat,
      deadlift,
      bench,
      age,
      weight,
      height,
      training_since,
    },
  });

  function onSubmit(data) {
    if (unit === "lbs") {
      Object.entries(data).forEach((entry) => {
        if (
          entry[0] !== "age" &&
          entry[0] !== "training_since" &&
          entry[0] !== "height"
        ) {
          data[entry[0]] = convertToKilos(Number(data[entry[0]]));
        }
      });
    }
    updateProfile({ stats: data, id });
  }

  function handleCancel() {
    reset();
  }

  return (
    <div className="flex w-full flex-col">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-4 rounded-md bg-primary-800 p-4 sm:items-end sm:p-8 md:gap-8"
      >
        <AppFormRow
          error={errors?.squat?.message}
          label={`Squat Personal Record (${unit})`}
        >
          <input
            className="rounded-md border-1 border-main bg-primary-700 p-2 text-white disabled:opacity-60 sm:max-w-[300px]"
            type="number"
            id="squat"
            placeholder="New squat PR"
            disabled={isUpdating}
            {...register("squat", {
              required: "This field is required",
              maxLength: {
                value: 3,
                message: "Max. 3 numbers",
              },
            })}
          />
        </AppFormRow>
        <AppFormRow
          error={errors?.bench?.message}
          label={`Bench Personal Record (${unit})`}
        >
          <input
            className="w-full rounded-md border-1 border-main bg-primary-700 p-2 text-white disabled:opacity-60 sm:max-w-[300px]"
            type="number"
            id="bench"
            placeholder="New bench PR"
            disabled={isUpdating}
            {...register("bench", {
              required: "This field is required",
              maxLength: {
                value: 3,
                message: "Max. 3 numbers",
              },
            })}
          />
        </AppFormRow>
        <AppFormRow
          error={errors?.deadlift?.message}
          label={`Deadlift Personal Record (${unit})`}
        >
          <input
            className="rounded-md border-1 border-main bg-primary-700 p-2 text-white disabled:opacity-60 sm:max-w-[300px]"
            type="number"
            id="deadlift"
            placeholder="New deadlift PR"
            disabled={isUpdating}
            {...register("deadlift", {
              required: "This field is required",
              maxLength: {
                value: 3,
                message: "Max. 3 numbers",
              },
            })}
          />
        </AppFormRow>
        <AppFormRow error={errors?.age?.message} label="Age (yo)">
          <input
            className="rounded-md border-1 border-main bg-primary-700 p-2 text-white disabled:opacity-60 sm:max-w-[300px]"
            type="number"
            id="age"
            placeholder="Your age"
            disabled={isUpdating}
            {...register("age", {
              required: "This field is required",
              maxLength: {
                value: 2,
                message: "Max. 99 years old",
              },
            })}
          />
        </AppFormRow>
        <AppFormRow error={errors?.weight?.message} label={`Weight (${unit})`}>
          <input
            className="rounded-md border-1 border-main bg-primary-700 p-2 text-white disabled:opacity-60 sm:max-w-[300px]"
            type="number"
            id="weight"
            placeholder="Your weight"
            disabled={isUpdating}
            {...register("weight", {
              required: "This field is required",
              maxLength: {
                value: 3,
                message: `Max. 999${unit}`,
              },
            })}
          />
        </AppFormRow>
        <AppFormRow error={errors?.height?.message} label="Height (cm)">
          <input
            className="rounded-md border-1 border-main bg-primary-700 p-2 text-white disabled:opacity-60 sm:max-w-[300px]"
            type="number"
            id="height"
            placeholder="Your height"
            disabled={isUpdating}
            {...register("height", {
              required: "This field is required",
              maxLength: {
                value: 3,
                message: "Max. 3 numbers",
              },
            })}
          />
        </AppFormRow>
        <AppFormRow
          error={errors?.training_since?.message}
          label="Training since (yyyy)"
        >
          <input
            className="rounded-md border-1 border-main bg-primary-700 p-2 text-white disabled:opacity-60 sm:max-w-[300px]"
            type="number"
            id="training_since"
            placeholder="When did you start?"
            disabled={isUpdating}
            {...register("training_since", {
              required: "This field is required",
              maxLenght: {
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
