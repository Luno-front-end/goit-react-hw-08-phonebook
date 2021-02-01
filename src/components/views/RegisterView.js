import { useState } from "react";
import { useDispatch } from "react-redux";

import { authOperations } from "../../Redux/auth";

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setName(value);
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);

      default:
        return;
    }
  };

  const handleSubmite = (e) => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    resetForm();
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmite}>
        <label>
          Ім'я
          <input value={name} name="name" type="name" onChange={handleChange} />
        </label>
        <label>
          Пошта
          <input
            value={email}
            name="email"
            type="email"
            onChange={handleChange}
          />
        </label>

        <label>
          Пароль
          <input
            value={password}
            name="password"
            type="password"
            onChange={handleChange}
          />
        </label>

        <button type="submit">Зареєструватися</button>
      </form>
    </div>
  );
}
