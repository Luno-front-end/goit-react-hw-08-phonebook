import { useEffect } from "react";
// import shortid from 'shortid';
import { useDispatch } from "react-redux";

import s from "./components/PhoneBook.module.css";

import phonebookOperations from "./Redux/phonebook/phonebook-operations";
import NavBar from "./components/NavBar/NavBar";
import { Route, Switch } from "react-router-dom";
import RegisterView from "./components/views/RegisterView";
import LoginView from "./components/views/LoginView";
import ContactsView from "./components/views/ContactsView";
import HomeView from "./components/views/HomeView";

export default function Mobile() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(phonebookOperations.fetchContact());
  }, [dispatch]);

  return (
    <div>
      <div className={s.container}>
        <NavBar />

        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>
          <Route path="/contacts">
            <ContactsView />
          </Route>

          <Route path="/register">
            <RegisterView />
          </Route>
          <Route path="/login">
            <LoginView />
          </Route>
        </Switch>
      </div>
    </div>
  );
}
