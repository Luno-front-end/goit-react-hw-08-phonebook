import Form from "../Form";
import ContactList from "../ContactList";
import SearchContact from "../SearchContact";
import s from "../PhoneBook.module.css";

export default function name() {
  return (
    <>
      <h1 className={s.headingForm}>Телефонна книга</h1>
      <Form />
      {/* <Form onSubmit={addContact} contactList={onCheckName} /> */}
      {/* <SearchContact velue={filter} SearchContact={veluesFilter} /> */}
      {/* <ContactList contactList={getFilter()} onDeleted={deletedContact} /> */}
      <h2 className={s.contactList}>Контакти</h2>
      <SearchContact />
      <ContactList />
    </>
  );
}
