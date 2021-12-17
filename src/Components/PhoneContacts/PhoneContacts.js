import React from 'react';
import PropTypes from 'prop-types';
import s from './PhoneBook.module.css';
const ContactsList = ({ contacts = [], delContact }) => {
  return (
    <ul className={s.Contact__list}>
      {contacts.map(el => (
        <li key={el.id} className={s.Contact__item}>
          <span>
            {el.name} : {el.number}
          </span>
          <button
            type="button"
            onClick={() => delContact(el.id)}
            className={s.Button__remove}
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};
ContactsList.propTypes = {
  contactsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};
export default ContactsList;
