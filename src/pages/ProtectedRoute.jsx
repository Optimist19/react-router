import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/FakeAuthContext";

// eslint-disable-next-line
function ProtectedRoute({children}) {
  const { isAuthenticated } = useAuth();

  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated) navigate("/");
  }, [isAuthenticated, navigate]);

  return (
    // eslint-disable-next-line
    isAuthenticated ? {children} : null // The children alone didn't work,so the conditional statement made it work
  );
}

export default ProtectedRoute;
