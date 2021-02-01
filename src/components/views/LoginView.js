import { useState } from "react";
import { useDispatch } from "react-redux";

import authOperations from "../../Redux/auth/auth-operations";

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    dispatch(authOperations.logIn({ email, password }));
    resetForm();
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmite}>
        <input
          value={email}
          name="email"
          type="email"
          onChange={handleChange}
        />
        <input
          value={password}
          name="password"
          type="password"
          onChange={handleChange}
        />
        <button type="submit">Увійти</button>
      </form>
    </div>
  );
}
