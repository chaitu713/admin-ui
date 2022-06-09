import React, { useState, useEffect } from "react";
import DataTable from "./DataTable";
import ModalForm from "./ModalForm";
import axios from "axios";
import SearchData from "./SearchData";

const MainPage = () => {
  let [tableData, setTableData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editRow, setEditRow] = useState(null);

  const [searchText, setSearchText] = useState("");
  let { filteredData } = useState();

  const [selectedData, setSelectedData] = useState([]);

  const saveEdit = () => {
    setTableData((prev) => {
      return prev.map((previousData) => {
        if (previousData.id === editRow.id) {
          return editRow;
        } else return previousData;
      });
    });
  };

  const resetEdit = () => {
    setIsEdit(false);
    setEditRow(null);
  };

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    axios
      .get(
        "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
      )
      .then((response) => {
        setTableData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = (value) => {
    const newData = [...tableData];
    const index = newData.findIndex((item) => item.id === value.id);
    newData.splice(index, 1);
    setTableData(newData);
  };

  const handleEdit = (record) => {
    setIsEdit(true);
    setEditRow({ ...record });
  };

  const searchData = () => {
    filteredData = tableData.filter((value) => {
      return (
        value.name.toLowerCase().includes(searchText.toLowerCase()) ||
        value.email.toLowerCase().includes(searchText.toLowerCase()) ||
        value.role.toLowerCase().includes(searchText.toLowerCase())
      );
    });
    setTableData(filteredData);
  };

  const handleSearch = (event) => {
    setSearchText(event.target.value);
    if (event.target.value) {
      loadData();
    }
  };

  const removeSelected = () => {
    const idList = selectedData.map((event) => event.id);
    tableData = tableData.filter((item) => {
      return !idList.includes(item.id);
    });
    setTableData(tableData);
    setSelectedData([]);
  };

  return (
    <div>
      <SearchData
        searchText={searchText}
        setSearchText={setSearchText}
        handleSearch={handleSearch}
        filteredData={filteredData}
        searchData={searchData}
      />
      <DataTable
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        tableData={tableData}
        removeSelected={removeSelected}
        selectedData={selectedData}
        setSelectedData={setSelectedData}
      />
      <ModalForm
        editRow={editRow}
        setEditRow={setEditRow}
        isEdit={isEdit}
        saveEdit={saveEdit}
        resetEdit={resetEdit}
      />
    </div>
  );
};

export default MainPage;
