import { useForm } from "react-hook-form";
import FormButtons from "../../ui/FormButtons";
import { useUpdateProfile } from "../profiles/useUpdateProfile";

function SettingsForm({ profile }) {
  const [{ id, visible }] = profile;
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      visible,
    },
  });
  const { updateProfile, isUpdating } = useUpdateProfile();

  function onSubmit(data) {
    updateProfile({ stats: data, id });
  }

  function handleCancel() {
    reset();
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col items-end gap-4 rounded-md bg-stone-800 p-4 sm:p-8 md:gap-8"
    >
      <div className="flex w-full gap-10">
        <label className="font-semibold text-stone-400">
          Allow other users to see your profile
        </label>
        <input
          type="checkbox"
          disabled={isUpdating}
          className="max-w-[30px] disabled:opacity-40"
          {...register("visible")}
        />
      </div>
      <FormButtons onCancel={handleCancel} isUpdating={isUpdating} />
    </form>
  );
}

export default SettingsForm;
