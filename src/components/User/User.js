import s from "./User.module.css";

export default function User() {
  return (
    <div className={s.containerNav}>
      <div className={s.containerUser}></div>
      <p className={s.user}>Доброго дня, ... !</p>
    </div>
  );
}
