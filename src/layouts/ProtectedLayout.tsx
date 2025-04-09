import { Outlet, useNavigate } from "react-router-dom";

export const ProtectedLayout = () => {
  // const { session, loading } = useSession();
  // const navigate = useNavigate();

  // todo: add a function which attempts to load the user's details. If fails, sends to onboarding page

  // if (loading) {
  //   return <Loading />;
  // }

  // if (!session) {
  //   navigate("/");
  // }

  // console.log(session);
  return <Outlet />;
};

export default ProtectedLayout;
