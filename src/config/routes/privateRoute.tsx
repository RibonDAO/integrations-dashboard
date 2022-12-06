import { Navigate } from "react-router-dom";

function PrivateRoute({ children }: any) {
  const accessToken = localStorage.getItem("token");

  return accessToken ? children : <Navigate to="/" />;
}

export default PrivateRoute;
