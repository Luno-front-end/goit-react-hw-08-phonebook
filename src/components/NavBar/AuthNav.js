import { NavLink } from "react-router-dom";

export default function authNav() {
  return (
    <div>
      <NavLink to="/register"> Реєстрація</NavLink>
      <NavLink to="/login"> Авторизація</NavLink>
    </div>
  );
}
