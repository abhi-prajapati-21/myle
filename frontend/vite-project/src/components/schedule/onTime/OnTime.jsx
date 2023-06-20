import React from "react";
import { hours } from "../../Utility/utility";
import "../schedule.css";
import { Form, Select, DatePicker } from "antd";

const OnTime = () => {

  return (
    <div>
      <Form.Item
        name='onTimeHour'
        rules={[{ required: true, message: `Please select hours` }]}
      >
        <Select
          placeholder="Choose Total amount of hours"
          options={hours}
        />
      </Form.Item>
      <Form.Item label="Select date" name='date'>
        <DatePicker />
      </Form.Item>
    </div>
  );
};

export default OnTime;
