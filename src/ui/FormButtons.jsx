import SpinnerMini from "./SpinnerMini";

function FormButtons({ isUpdating }) {
  return (
    <div className="mt-5 flex gap-2">
      <button
        type="reset"
        disabled={isUpdating}
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
  );
}

export default FormButtons;
