import React from "react";
import { Button, Popconfirm, Table } from "antd";
import {
  DeleteTwoTone,
  EditTwoTone,
  QuestionCircleOutlined,
} from "@ant-design/icons";

const DataTable = ({
  handleDelete,
  handleEdit,
  tableData,
  selectedData,
  setSelectedData,
  removeSelected,
}) => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      align: "center",
    },
    {
      title: "Email",
      dataIndex: "email",
      align: "center",
    },
    {
      title: "Role",
      dataIndex: "role",
      align: "center",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      align: "center",
      render: (_, record) => {
        return (
          <>
            <Button
              shape="circle"
              icon={<EditTwoTone twoToneColor="#21B6A8" />}
              size="small"
              style={{ borderColor: "#21B6A8" }}
              onClick={() => handleEdit(record)}
            />
            <Popconfirm
              title="Do you really want to delete this row?"
              okText="Yes"
              cancelText="No"
              icon={<QuestionCircleOutlined style={{ color: "red" }} />}
              onConfirm={() => handleDelete(record)}
              okType="danger"
            >
              <Button
                shape="circle"
                icon={<DeleteTwoTone twoToneColor="red" />}
                size="small"
                style={{ marginLeft: "20px", borderColor: "red" }}
              />
            </Popconfirm>
          </>
        );
      },
    },
  ];

  return (
    <div className="App">
      <Table
        columns={columns}
        dataSource={tableData}
        bordered
        style={{
          width: "750px",
          marginLeft: "400px",
        }}
        rowSelection={{
          type: "checkbox",
          onChange: (selectedRowKeys, selectedRows) => {
            console.log(
              `Selected Row Keys : ${selectedRowKeys}`,
              "selectedRows:",
              selectedRows
            );
            setSelectedData(selectedRows);
          },
        }}
        rowKey={(record) => record.id}
      />
      {selectedData.length > 0 && (
        <Button
          type="primary"
          danger
          onClick={() => removeSelected()}
          style={{
            marginLeft: "400px",
            marginTop: "-50px",
            display: "flex",
            background: "red",
          }}
        >
          Delete Selected
        </Button>
      )}
    </div>
  );
};

export default DataTable;
