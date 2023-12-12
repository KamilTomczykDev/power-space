import { BiLoaderAlt } from "react-icons/bi";

function SpinnerMini() {
  return (
    <div className="flex h-full animate-spin items-center justify-center">
      <BiLoaderAlt size={25} />
    </div>
  );
}

export default SpinnerMini;
