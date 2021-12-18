import React, { useState } from "react";
import s from "./InputPhonebook.module.css";
import { nanoid } from "nanoid";

const Form = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (el) => {
    el.preventDefault();
    onSubmit({ name, number });
    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={s.Forma}>
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
          onChange={handleInputChange}
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
          onChange={handleInputChange}
        />
        <button type="submit" className={s.Button__form}>
          Add Contact
        </button>
      </form>
    </>
  );
};

export default Form;
