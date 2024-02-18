import { Link } from "react-scroll";

function NavLink({ children, to, onClick, className = "" }) {
  return (
    <li
      className={`${className} cursor-pointer border-b-1 border-main p-2 transition duration-300 hover:text-primary-500 md:border-0 md:p-0`}
    >
      <Link to={to} onClick={onClick} duration={1000} smooth={true}>
        {children}
      </Link>
    </li>
  );
}

export default NavLink;
