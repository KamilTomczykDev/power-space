import { useNavigate } from "react-router-dom";
import IconLink from "../../ui/IconLink";
import { FaRegUser } from "react-icons/fa";

function FriendsRow({ profile }) {
  const navigate = useNavigate();
  const { username, id } = profile;
  return (
    <div className="flex w-full items-center justify-between rounded-md border-2 border-stone-400 bg-stone-800 p-2 text-xl text-white xl:p-3 xl:text-2xl">
      <label>{username}</label>
      <IconLink onClick={() => navigate(id)}>
        <FaRegUser size={25} color={"#1be053"} />
      </IconLink>
    </div>
  );
}

export default FriendsRow;
