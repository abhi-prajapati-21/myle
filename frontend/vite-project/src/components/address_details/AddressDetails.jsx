import React from "react";
import "./addressDetails.css";
import { Form, Input, Button } from "antd";

const AddressDetails = ({ handleNext, handlePrivious }) => {
  const validateForm = () => {
    handleNext();
  };

  return (
    <div>
      <Form.Item
        label="Address"
        name="address"
        rules={[
          {
            required: true,
            message: "Please input your address!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Apartment"
        name="apartment"
        rules={[
          {
            required: true,
            message: "Please input your Apartment!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="City"
        name="city"
        rules={[
          {
            required: true,
            message: "Please input your city!",
          },
        ]}
      ><Input />
      </Form.Item>
        <Form.Item
          label="Postal Code"
          name="Postal Code"
          rules={[
            {
              required: true,
              message: "Please input your Postal Code!",
            },
          ]}
        >
          <Input type="number" />
        </Form.Item>
      <Form.Item>
        <Button type="button" onClick={validateForm}>
          Next
        </Button>
      </Form.Item>
      <Form.Item>
        <Button type="button" onClick={() => handlePrivious()}>
          Previous
        </Button>
        <Button type="button" onClick={() => handlePrivious()}>
          Previous
        </Button>
      </Form.Item>
    </div>
  );
};

export default AddressDetails;
