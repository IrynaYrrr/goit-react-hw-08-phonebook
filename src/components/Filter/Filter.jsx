import React from "react";
import css from "./Filter.module.css";
import { useDispatch } from 'react-redux';
import { setFilter } from 'store/redux/filterSlice';


export const Filter = () => {

  const dispatch = useDispatch();

  const handleFilterChange = (value) => dispatch(setFilter(value));

  const handleChange = evt => {
    const { value } = evt.target;
    handleFilterChange(value);
  };

  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.inputFind}
        type="text"
        placeholder="Enter name"
        name="filter"
        onChange={handleChange}
      />
    </label>
  )
}
