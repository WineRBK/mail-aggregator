import React, { FC, useEffect, useState } from 'react';
import SearchIcon from '../../Images/svg/SearchIcon/SearchIcon';
import s from './Search.module.scss';

interface SearchProps {
  handleText: () => {};
}

const Search: FC<SearchProps> = ({ handleText }) => {
  const [value, setValue] = useState('');
  useEffect(() => {
    handleText(value);
  }, [value]);

  return (
    <span className={s.search__wrapper}>
      <SearchIcon className={s.search__icon} />
      <input
        value={value}
        className={s.search}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search"
      />
    </span>
  );
};

export default Search;
