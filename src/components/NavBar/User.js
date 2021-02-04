import { useSelector, useDispatch } from "react-redux";
import { authSelectors, authOperations } from "../../Redux/auth";
import { ImUser } from "react-icons/im";
// ImUser;

import s from "./User.module.css";

export default function User() {
  const userName = useSelector(authSelectors.getUserName);
  const dispatch = useDispatch();

  return (
    <>
      <div className={s.containerNav}>
        <div>
          <ImUser className={s.containerUser} />
        </div>
        <p className={s.user}>Доброго дня, {userName} !</p>
        <button
          className={s.btn}
          type="button"
          onClick={() => dispatch(authOperations.logOut())}
        >
          Вийти
        </button>
      </div>
    </>
  );
}
