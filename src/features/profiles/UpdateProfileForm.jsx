import { useForm } from "react-hook-form";
import AppFormRow from "../../ui/AppFormRow";
import FormButtons from "../../ui/FormButtons";

function UpdateProfileForm() {
  const { register, formState } = useForm();
  const isUpdating = false;
  const { errors } = formState;
  return (
    <>
      <label className="text-lg font-semibold text-stone-400 sm:text-2xl">
        Update profile data:
      </label>
      <form className="flex w-full flex-col gap-4 rounded-md bg-stone-800 p-4 sm:items-end sm:p-8 md:gap-8">
        <AppFormRow error={errors?.squat?.message} label="Squat PR">
          <input
            className="w-full rounded-md border-2 border-stone-400 bg-stone-700 p-2 text-white disabled:opacity-60"
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
        <AppFormRow error={errors?.bench?.message} label="Bench PR">
          <input
            className="w-full rounded-md border-2 border-stone-400 bg-stone-700 p-2 text-white disabled:opacity-60"
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
        <AppFormRow error={errors?.password?.message} label="Deadlift PR">
          <input
            className="w-full rounded-md border-2 border-stone-400 bg-stone-700 p-2 text-white disabled:opacity-60"
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
        <AppFormRow error={errors?.password?.message} label="Age (yo)">
          <input
            className="w-full rounded-md border-2 border-stone-400 bg-stone-700 p-2 text-white disabled:opacity-60"
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
        <AppFormRow error={errors?.password?.message} label="Weight">
          <input
            className="w-full rounded-md border-2 border-stone-400 bg-stone-700 p-2 text-white disabled:opacity-60"
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
        <AppFormRow error={errors?.password?.message} label="Height">
          <input
            className="w-full rounded-md border-2 border-stone-400 bg-stone-700 p-2 text-white disabled:opacity-60"
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
        <AppFormRow error={errors?.password?.message} label="Training since">
          <input
            className="w-full rounded-md border-2 border-stone-400 bg-stone-700 p-2 text-white disabled:opacity-60"
            type="number"
            id="since"
            placeholder="When did you start?"
            disabled={isUpdating}
            {...register("sincet", {
              required: "This field is required",
              maxLength: {
                value: 4,
                message: "Max. 4 numbers",
              },
            })}
          />
        </AppFormRow>

        <FormButtons isUpdating={isUpdating} />
      </form>
    </>
  );
}

export default UpdateProfileForm;
