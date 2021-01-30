import { NavLink } from "react-router-dom";
import User from "../User/User";

export default function Navigation(params) {
  return (
    <div>
      <NavLink to="/contacts" exact>
        Контакти
      </NavLink>
      <NavLink to="/register"> Реєстрація</NavLink>
      <NavLink to="/login"> Авторизація</NavLink>
      <User />
    </div>
  );
}
