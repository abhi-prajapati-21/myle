import React, { useContext } from "react";
import "./schedule.css";
import { Tabs, Form, Button } from "antd";
import OnTime from "./onTime/OnTime";
import Recurring from "./Recurring/Recurring";
import Flexible from "./flexible/Flexible";
import { Context } from "../../App";

const Schedule = ({ handleNext, handlePrivious }) => {

  const { weekPlannerInfo }  = useContext(Context)

 const validateForm = () => {
  handleNext(weekPlannerInfo.weekPlanner)
 }

  const items = [
    {
      label: `Recurring`,
      key: `Recurring`,
      children: <Recurring />
    },
    {
      label: `on Time`,
      key: 'onTime',
      children: <OnTime />
    },
    {
      label: `flexible`,
      key: 'flexible',
      children: <Flexible />
    },
  ]

  return (
    <div>
      <Form.Item name={"schedule"} >
      <Tabs
        // onChange={onChange}
        type="card"
        items={items}
      />
      </Form.Item>
      <Form.Item>
        <Button type="button" onClick={validateForm}>Next</Button>
      </Form.Item>
      <Form.Item>
        <Button type="button" handlePrivious={() => handlePrivious()} >Privious</Button>
      </Form.Item>
    </div>
  );
};

export default Schedule;
