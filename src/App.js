import { useEffect } from "react";
// import shortid from 'shortid';
import { useDispatch } from "react-redux";

import s from "./components/PhoneBook.module.css";

import phonebookOperations from "./Redux/phonebook/phonebook-operations";
import Navigation from "./components/Navigation/Navigation";
import { Route, Switch } from "react-router-dom";
import RegisterView from "./components/views/RegisterView";
import LoginView from "./components/views/LoginView";
import ContactsView from "./components/views/ContactsView";

export default function Mobile() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(phonebookOperations.fetchContact());
  }, [dispatch]);

  return (
    <div>
      <div className={s.container}>
        <Navigation />

        <Switch>
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
