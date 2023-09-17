import React from "react";
import { useState } from "react";

const SearchBar = ({ setFilterValue }) => {
  const [searchValue, setSearchValue] = useState(" ");
  const formSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
    console.log("search value was: " + searchValue);
    setFilterValue(searchValue);
    setSearchValue(" ");
  };

  const onInputChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };
  return (
    <form onSubmit={formSubmit}>
      {/* <form onSubmit={(e) => e.preventDefault()}>  이벤트 프리벤트 디폴트 여기서도 처리가능*/}
      <input type="text" value={searchValue} onChange={onInputChange} />
      {/* <button onClick={(e) => e.preventDefault()}>Search</button>  이벤트 프리벤드 디폴트 처리해서 화면이 리셋되지 않게 */}
      <button>Search</button>
    </form>
  );
};

export default SearchBar;
