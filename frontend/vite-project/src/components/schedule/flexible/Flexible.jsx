import React from "react";
import "../schedule.css";
import { Form, Select, DatePicker } from "antd";
import { hours } from "../../Utility/utility";
import TableForm from "../TableForm/TableForm";


const Flexible = () => {

  return (
    <div>
      <Form.Item
        name={"flexibleHour"}
        rules={[{ required: true, message: `Please select hours` }]}
      >
        <Select
          placeholder="Choose Total amount of hours"
          options={hours}
        />
      </Form.Item>
      <Form.Item label="Select date" name="date">
        <DatePicker />
      </Form.Item>
      <Form.Item name={"week-data"}>
        <TableForm/>
      </Form.Item>
    </div>
  );
};

export default Flexible;
