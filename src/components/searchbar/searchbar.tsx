import scss from "./searchbar.module.scss";

import { useState, ChangeEvent, FormEvent } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from "nanoid";
import { SubmitBnt } from "../button/button";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

// Тип для пропсів
interface SearchbarProps {
  onSubmit: (inputSearch: string) => void;
}

export default function Searchbar({ onSubmit }: SearchbarProps) {

  // Тип для стану
  const [inputSearch, setInputSearch] = useState<string>('');

  const searchID = nanoid();

  const searchField = {
    label: "Search",
    type: "text",
    name: "inputSearch",
    placeholder: "Search images and photos",
    required: true,
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setInputSearch(value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    if (inputSearch.trim() === '') {
      return Notify.failure('Please, enter name');
    }
    onSubmit(inputSearch);
    reset();
  };

  const reset = (): void => {
    setInputSearch('');
  };

  return (
    <header 
    className={scss.Searchbar}
    >
      <form
        className={scss.SearchForm}
        onSubmit={handleSubmit}
      >
        <SubmitBnt
          text="Search"
        />
        <input
          id={searchID}
          className={scss.SearchFormInput}
          value={inputSearch}
          onChange={handleChange}
          {...searchField}
          autoComplete="off"
          autoFocus
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};