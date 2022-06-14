import React from "react";
import { Input } from "antd";

const SearchData = ({
  handleSearch,
  searchText,
  setSearchText,
  filteredData,
  searchData,
}) => {
  const { Search } = Input;
  return (
    <div className="App">
      <br />
      <Search
        placeholder="Search by Name, Email or Role"
        type="text"
        value={searchText}
        onChange={handleSearch}
        enterButton
        onKeyUp={searchData}
        className="searchbar"
        // style={{
        //   width: "50%",
        //   marginLeft: "25%",
        // }}
      />
    </div>
  );
};

export default SearchData;
