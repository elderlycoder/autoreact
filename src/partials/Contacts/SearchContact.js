import React from "react";

const SearchContact = () => {
  return (
    <div>
      <label htmlFor="name-search">Поиск: </label> 
      <input id="name-search" name="title" type="text" size="35" placeholder="Начните вводить имя или телефон" />
    </div>
  );
};

export default SearchContact;