import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import { useEffect } from "react";

import logo from "../assets/logo.png";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  // 1. Load the authenticated user
  const { isLoading, isAuthenticated } = useUser();
  //2. while loading show spinner
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

  //3 if there is no authenticated user, redirect to login
  //4 if there is a user render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
