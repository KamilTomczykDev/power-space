import { useNavigate } from "react-router-dom";
import IconLink from "../../ui/IconLink";
import { FaRegUser } from "react-icons/fa";
import HoverInfo from "../../ui/HoverInfo";

function FriendsRow({ profile }) {
  const navigate = useNavigate();
  const { username, id } = profile;
  return (
    <div className="flex w-full items-center justify-between rounded-md border-1 border-main bg-primary-800 p-2 text-xl text-white transition duration-200 hover:bg-primary-700 xl:p-3 xl:text-2xl">
      <label>{username}</label>
      <HoverInfo text="View profile">
        <IconLink onClick={() => navigate(`/app/${id}`)}>
          <FaRegUser size={25} color={"#1be053"} />
        </IconLink>
      </HoverInfo>
    </div>
  );
}

export default FriendsRow;
