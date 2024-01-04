import { nanoid } from '@reduxjs/toolkit'

export const createObjectContact = ({name, number}) => {
  return {
    payload: {
      name,
      number,
      id: nanoid(),
    },
  };
}
