import s from "./Navigation.module.css";

export default function Navigation() {
  return (
    <div className={s.containerNav}>
      <div className={s.containerUser}></div>
      <p className={s.user}>Доброго дня, ... !</p>
    </div>
  );
}
