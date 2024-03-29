import React from "react";
import { useDispatch, useSelector } from "react-redux";
import css from "./ContactList.module.css";
import { deleteContact } from 'redux/contacts/operations';
import { selectFilteredContacts } from 'redux/contacts/selectors';


export const ContactList = () => {

  const dispatch = useDispatch();

  const handleDelete = (id) => dispatch(deleteContact(id));

  const filtered = useSelector(selectFilteredContacts);

  return (
    <div className={css.contactsWrap}>
      <ul>
        {filtered.map(({id, number, name}) =>
            <li className={css.contactItem} key={id}>
              <div>{name}: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{number}</div>
              <div>
                <button className={css.btnDelete}
                  onClick={() => handleDelete(id)}>
                  Delete
                </button>
              </div>
            </li>
        )}
      </ul>
    </div>
  )
}
