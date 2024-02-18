import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import { useEffect } from "react";

import logo from "../assets/logo.png";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = useUser();

  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate],
  );

  if (isLoading)
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <img src={logo} />
      </div>
    );

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
