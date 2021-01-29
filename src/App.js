import { useEffect } from "react";
// import shortid from 'shortid';
import { useDispatch } from "react-redux";

import s from "./components/PhoneBook.module.css";

import Form from "./components/Form";
import ContactList from "./components/ContactList";
import SearchContact from "./components/SearchContact";
import phonebookOperations from "./Redux/phonebook/phonebook-operations";
import Navigation from "./components/Navigation/Navigation";

export default function Mobile() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(phonebookOperations.fetchContact());
  }, [dispatch]);

  return (
    <div>
      <Navigation />

      <div className={s.container}>
        <h1 className={s.headingForm}>Телефонна книга</h1>
        <Form />
        {/* <Form onSubmit={addContact} contactList={onCheckName} /> */}
        {/* <SearchContact velue={filter} SearchContact={veluesFilter} /> */}
        {/* <ContactList contactList={getFilter()} onDeleted={deletedContact} /> */}
        <h2 className={s.contactList}>Контакти</h2>
        <SearchContact />
        <ContactList />
      </div>
    </div>
  );
}
