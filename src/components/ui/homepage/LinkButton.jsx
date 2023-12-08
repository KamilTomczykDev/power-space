import { Link } from "react-router-dom";

function LinkButton({ to, children }) {
  return (
    <Link
      to={to}
      className="text-sm text-green-400 hover:text-green-600 hover:underline"
    >
      {children}
    </Link>
  );
}

export default LinkButton;
