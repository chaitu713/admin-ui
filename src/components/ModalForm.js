import React from "react";
import { Modal, Input, Form } from "antd";
import { useEffect } from "react";
const ModalForm = ({ editRow, setEditRow, isEdit, saveEdit, resetEdit }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      name: editRow?.name,
      email: editRow?.email,
      role: editRow?.role,
    });
  });
  return (
    <div className="App">
      <Modal
        visible={isEdit}
        onCancel={() => {
          resetEdit();
        }}
        onOk={() => {
          form
            .validateFields()
            .then(() => {
              saveEdit();
              resetEdit();
            })
            .catch((error) => {
              console.log("Validation Failed:", error);
            });
        }}
        okText="Save"
      >
        <Form
          form={form}
          layout="horizontal"
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 14,
          }}
          size="large"
        >
          <Form.Item
            style={{ marginTop: "30px", display: "flex" }}
            name="name"
            label="Name"
            rules={[
              {
                required: true,
                message: "Please enter the Name",
              },
              {
                min: 3,
                message: "Oops! Name should not subceed 3 characters",
              },
              {
                max: 20,
                message: "Oops! Name should not exceed 20 characters",
              },
            ]}
          >
            <Input
              value={editRow?.name}
              type="text"
              onChange={(event) => {
                setEditRow((previous) => {
                  return { ...previous, name: event.target.value };
                });
              }}
              placeholder="Enter Your Name..."
            />
          </Form.Item>
          <Form.Item
            style={{ marginTop: "20px", display: "flex" }}
            name="email"
            label="Email"
            rules={[
              {
                type: "email",
                message: "The input is not valid Email!",
              },
              {
                required: true,
                message: "Please enter the Email",
              },
            ]}
          >
            <Input
              value={editRow?.email}
              onChange={(event) => {
                setEditRow((previous) => {
                  return { ...previous, email: event.target.value };
                });
              }}
              placeholder="Enter Your Email..."
            />
          </Form.Item>
          <Form.Item
            style={{ marginTop: "20px" }}
            name="role"
            label="Role"
            rules={[
              {
                required: true,
                message: "Please enter the Role",
              },
              {
                min: 3,
                message: "Oops! Role should not subceed 3 characters",
              },
              {
                max: 10,
                message: "Oops! Role should not exceed 10 characters",
              },
            ]}
          >
            <Input
              value={editRow?.role}
              type="text"
              onChange={(event) => {
                setEditRow((previous) => {
                  return { ...previous, role: event.target.value };
                });
              }}
              placeholder="Enter Your Role..."
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ModalForm;
