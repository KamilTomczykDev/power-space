import { Link } from "react-router-dom";

function LinkButton({ to, children }) {
  return (
    <Link
      to={to}
      className="flex items-center gap-2 text-sm text-secondary-400 hover:text-secondary-600 hover:underline"
    >
      {children}
    </Link>
  );
}

export default LinkButton;
