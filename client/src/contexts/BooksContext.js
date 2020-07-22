import React, { useState, createContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const BooksContext = createContext(null);

const BooksProvider = ({ children }) => {
  const [books, setBooks] = useLocalStorage('books', null);

  const saveBooks = (books) => {
    setBooks(books);
  };

  return <BooksContext.Provider value={{ books, setBooks }}> {children}</BooksContext.Provider>;
};

export default BooksProvider