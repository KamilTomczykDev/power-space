import SpinnerMini from "./SpinnerMini";
import Button from "./Button";

function FormButtons({ onCancel = null, isUpdating }) {
  return (
    <div className="mt-5 flex gap-2">
      <Button
        variant="secondary"
        type={!onCancel ? "reset" : "button"}
        onClick={onCancel}
        disabled={isUpdating}
        className="sm:w-[80px]"
      >
        Reset
      </Button>
      <Button disabled={isUpdating} className="sm:w-[120px]">
        {isUpdating ? <SpinnerMini /> : "Submit"}
      </Button>
    </div>
  );
}

export default FormButtons;
