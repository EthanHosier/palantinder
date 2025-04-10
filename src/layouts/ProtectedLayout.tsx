import { Outlet, useNavigate } from "react-router-dom";
import { auth } from "../lib/osdk";
import { useState, useEffect } from "react";

export const ProtectedLayout = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  
  useEffect(() => {
    const checkAuth = async () => {
      try {
        if (!auth.getTokenOrUndefined()) {
          const token = await auth.signIn();
          // You might want to do something with the token here
        }
        setIsLoading(false);
      } catch (error) {
        console.error('Authentication error:', error);
        // Handle authentication error (e.g., redirect to login page)
        alert("Authentication error");
      }
    };

    checkAuth();
  }, [navigate]);

  // todo: add a function which attempts to load the user's details. If fails, sends to onboarding page

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <Outlet />;
};

export default ProtectedLayout;
