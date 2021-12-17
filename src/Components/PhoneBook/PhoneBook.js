import React, { useState, useEffect } from "react";
// import s from '../InputPhoneBook/InputPhonebook.module.css';
import Form from "../Forma/FormPhonebook";
import ContactsList from "../PhoneContacts/PhoneContacts";
import Filter from "../Filter/Filter";
import s from "./PhoneBook.module.css";
import { nanoid } from "nanoid";
function PhoneBook() {
  const [contacts, setContacts] = useState(
    window.localStorage.getItem("contacts") ?? ""
  );

  // window.localStorage.getItem("contacts") ?? ""
  const [filter, setFilter] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
    console.log("object");
  }, [contacts]);

  const onSubmit = (data) => {
    const contact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };
    if (availabilityContact(contact.name)) {
      return alert(`Name ${contact.name}already on your list
      `);
    } else {
      setContacts((prevState) => [...prevState, { ...contact }]);
    }
  };

  const availabilityContact = (value) => {
    return contacts.find((el) => el.name === value);
  };

  const delContact = (contactId) => {
    setContacts((prevState) =>
      contacts.filter((contact) => contact.id !== contactId)
    );
    window.localStorage.removeItem("contacts");
  };
  const filterContact = (e) => {
    setFilter(() => e.target.value);
  };

  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = [contacts].filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  return (
    <>
      <div className={s.PhoneBookBlock}>
        <Form onSubmit={onSubmit} />
      </div>
      <div>
        <div>
          <h2 className={s.Contacts__title}>Contacts</h2>
          {contacts.length > 0 ? (
            <Filter filterContact={filterContact} value={filter} />
          ) : (
            <p className={s.Filter__text}>No contacts🙁</p>
          )}
        </div>
        <ContactsList contacts={visibleContacts} delContact={delContact} />
      </div>
    </>
  );
}
export default PhoneBook;
