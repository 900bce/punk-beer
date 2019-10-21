import React from 'react';

const SearchBox = ({ onSearchChange }) => {
  return (
    <input className="search" 
      type="text" 
      placeholder="Search" 
      onChange={onSearchChange}/>
  );
}

export default SearchBox;