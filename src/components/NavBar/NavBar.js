import { useSelector } from "react-redux";

import AuthNav from "./AuthNav";
import Navigation from "./Navigation";
import { authSelectors } from "../../Redux/auth";
import User from "./User";

export default function NavBar() {
  const LoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
      <Navigation />

      {LoggedIn ? <User /> : <AuthNav />}
    </>
  );
}
