import React from 'react';
import s from './Filter.module.css';
const Filter = ({ filterContact, value }) => {
  return (
    <div>
      <form className={s.Filter__search}>
        <label>Search</label>
        <input
          className={s.Filter__input}
          value={value}
          onChange={filterContact}
          placeholder="Enter your name"
        ></input>
      </form>
    </div>
  );
};

export default Filter;
