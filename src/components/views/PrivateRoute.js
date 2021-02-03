import { Redirect, Route } from "react-router-dom";
// import ContactsView from "./ContactsView";
import { authSelectors } from "../../Redux/auth";
import { useSelector } from "react-redux";

export default function PrivateRoute({ children, ...routeProps }) {
  const isLogedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Route {...routeProps}>
      {isLogedIn ? children : <Redirect to="/login" />}
    </Route>
  );
}
