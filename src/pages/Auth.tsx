import { useEffect } from "react";
import { auth } from "../lib/osdk";
import { Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = auth.getTokenOrUndefined();
    if (token) {
      navigate("/");
    } else {
      auth.signIn();
    }
  }, []);
  
  return <Button onClick={() => auth.signIn()}>Sign in</Button>;
};

export default Auth;
