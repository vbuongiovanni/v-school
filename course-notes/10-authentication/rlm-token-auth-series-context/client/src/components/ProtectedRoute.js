import { Navigate } from "react-router-dom";
const ProtectedRoute = (props) => {
  const {token, children, redirectTo} = props;
  // this will either return 1) the projected component, or 2) a redirect to the login component, depending on whether or not token is a truthy value
  return token ? children : <Navigate to={redirectTo}/>
};
export default ProtectedRoute;