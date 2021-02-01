import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <div>
      <NavLink to="/" exact>
        Головна
      </NavLink>
      <NavLink to="/contacts">Контакти</NavLink>
    </div>
  );
}
