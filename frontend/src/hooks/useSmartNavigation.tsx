import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const useSmartBackNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleBack = () => {
      const user = JSON.parse(localStorage.getItem("user") || "null");

      if (!user) {
        navigate("/", { replace: true });
        return;
      }

      const path = location.pathname;

      // If already on dashboard → go home
      if (path === "/doctor" || path === "/patient") {
        navigate("/", { replace: true });
        return;
      }

      // From inner pages → go to respective dashboard
      if (user.role === "doctor") {
        navigate("/doctor", { replace: true });
      } else {
        navigate("/patient", { replace: true });
      }
    };

    window.addEventListener("popstate", handleBack);

    return () => {
      window.removeEventListener("popstate", handleBack);
    };
  }, [navigate, location.pathname]);
};

export default useSmartBackNavigation;
