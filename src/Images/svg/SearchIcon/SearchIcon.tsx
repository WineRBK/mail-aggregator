import React, { FC } from 'react';
import cn from 'classnames';

interface SearchIconProps {
  className?: string;
}

const SearchIcon: FC<SearchIconProps> = ({ className = '' }) => {
  return (
    <svg
      className={cn(className)}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none">
      <path
        d="M16.2172 16.2346L22 22M18.6667 10.3333C18.6667 14.9357 14.9357 18.6667 10.3333 18.6667C5.73096 18.6667 2 14.9357 2 10.3333C2 5.73096 5.73096 2 10.3333 2C14.9357 2 18.6667 5.73096 18.6667 10.3333Z"
        stroke="#606063"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SearchIcon;
