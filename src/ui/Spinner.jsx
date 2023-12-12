import { BiLoaderAlt } from "react-icons/bi";

function Spinner({ color }) {
  return (
    <div className="flex h-full animate-spin items-center justify-center">
      <BiLoaderAlt size={100} color={color} />
    </div>
  );
}

export default Spinner;
