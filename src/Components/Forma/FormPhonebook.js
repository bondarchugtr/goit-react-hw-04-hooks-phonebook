import React, { Component } from "react";
import s from "./InputPhonebook.module.css";
import { nanoid } from "nanoid";
import Contacts from "../PhoneContacts/PhoneContacts";

class Form extends Component {
  state = {
    name: "",
    number: "",
  };

  handleInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.onContactsItem();
    this.reset();
  };

  onContactsItem = () => {
    this.setState({
      contacts: [this.state.name, this.state.number],
    });
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit} className={s.Forma}>
          <label className={s.nameinput} />
          Name
          <input
            className={s.Forma__input}
            id={nanoid()}
            type="text"
            name="name"
            value={name}
            placeholder="Ivan Petrov"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleInputChange}
          />
          <label className={s.nameinput} />
          Number
          <input
            className={s.Forma__input}
            id={nanoid()}
            type="text"
            name="number"
            value={number}
            placeholder="+380990000000"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleInputChange}
          />
          <button type="submit" className={s.Button__form}>
            Add Contact
          </button>
        </form>
      </>
    );
  }
}

export default Form;
