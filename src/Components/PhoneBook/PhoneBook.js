import React, { setState, useEffect}from "react";
// import s from '../InputPhoneBook/InputPhonebook.module.css';
import Form from "../Forma/FormPhonebook";
import ContactsList from "../PhoneContacts/PhoneContacts";
import Filter from "../Filter/Filter";
import s from "./PhoneBook.module.css";
import { nanoid } from "nanoid";

function PhoneBook () {

  const [contacts, setContacts] = setState([]);
  const [filter, setFilter] = setState('');



  useEffect=() => {
    effect
    return () => {
      cleanup
    }
  }, [input]) = () => {
    const contact = localStorage.getItem("contacts");
    const localStorageLoading = JSON.parse(contact);
    if (localStorageLoading) {
      this.setState({ contacts: localStorageLoading });
    }
  };

  componentDidUpdate(prevProps) {
    if (prevProps) {
      window.localStorage.setItem(
        "contacts",
        JSON.stringify(this.state.contacts)
      );
    }
  }

  onSubmit = (data) => {
    const contact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };
    if (this.availabilityContact(contact.name)) {
      return alert(`Name ${contact.name}already on your list
      `);
    } else {
      this.setState((prevState) => ({
        contacts: [...prevState.contacts, { ...contact }],
      }));
    }
  };

  availabilityContact = (value) => {
    return this.state.contacts.find((el) => el.name === value);
  };

  delContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
    window.localStorage.removeItem("contacts");
  };
  filterContact = (e) => {
    this.setState({ filter: e.target.value });
  };

  
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return (
      <>
        <div className={s.PhoneBookBlock}>
          <Form onSubmit={this.onSubmit} />
        </div>
        <div>
          <div>
            <h2 className={s.Contacts__title}>Contacts</h2>
            {contacts.length > 0 ? (
              <Filter filterContact={this.filterContact} value={filter} />
            ) : (
              <p className={s.Filter__text}>No contacts🙁</p>
            )}
          </div>
          <ContactsList
            contacts={visibleContacts}
            delContact={this.delContact}
          />
        </div>
      </>
    );
  
}
export default PhoneBook;
