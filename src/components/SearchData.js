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
    <div>
      <br />
      <Search
        placeholder="Search by Name, Email or Role"
        type="text"
        value={searchText}
        onChange={handleSearch}
        enterButton
        onKeyUp={searchData}
        style={{
          width: "750px",
          marginLeft: "401px",
        }}
      />
    </div>
  );
};

export default SearchData;
