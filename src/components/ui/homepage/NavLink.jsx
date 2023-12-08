import { Link } from "react-scroll";

function NavLink({ children, to, onClick }) {
  return (
    <li className="cursor-pointer border-b-[1px] border-stone-700 p-2 hover:text-stone-500 md:border-0 md:p-0">
      <Link to={to} onClick={onClick} duration={1000} smooth={true}>
        {children}
      </Link>
    </li>
  );
}

export default NavLink;
