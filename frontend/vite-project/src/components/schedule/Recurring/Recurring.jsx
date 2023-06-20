import React, { useEffect, useState } from "react";
import "../schedule.css";
import { Form, Select, DatePicker } from "antd";
import { recurringOpt, hours } from "../../Utility/utility";
import TableForm from "../TableForm/TableForm";

const Recurring = () => {
  // const [hr, setHr] = useState(0);
  const [timePriod, setTimePriod] = useState("day");
  const [dateFormat, setDateFormat] = useState("DD/MM/YY h:mm A");
  const [picker, setPicker] = useState("day");

  const getDateFormat = (pickerValue) => {
    switch (pickerValue) {
      case "":
        return "DD/MM/YY h:mm A";
      case "week":
        return "DD/MM/YY";
      case "weeks":
        return "DD/MM/YY";
      case "month":
        return "MMM YYYY";
      case "year":
        return "YYYY";
      default:
        return "DD/MM/YY";
    }
  };

  return (
    <div>
      <Form.Item
        name={"recurringHours"}
        rules={[{ required: true, message: `Please select hours` }]}
      >
        <Select placeholder="Choose Total amount of hours" options={hours} />
      </Form.Item>
      <Form.Item
        name={"recurring-time"}
        rules={[{ required: true, message: `Please select options` }]}
      >
        <Select
          placeholder="Choose Total amount of hour"
          options={recurringOpt}
        />
      </Form.Item>
      <Form.Item label="Select date" name="date">
        <DatePicker
          //  onChange={handleDatePicker}
          format={dateFormat}
          picker={picker === "day" ? "" : picker}
          showTime={{ format: "h:mm A" }}
        />
      </Form.Item>
      <Form.Item>
        <TableForm />
      </Form.Item>
    </div>
  );
};

export default Recurring;
