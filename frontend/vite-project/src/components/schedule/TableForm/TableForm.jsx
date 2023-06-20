import React, { useContext, useEffect } from 'react'
import { Table, Radio, Form } from "antd";
import { Context } from '../../../App';
import { useState } from 'react';

const TableForm = () => {

  const { weekPlannerInfo }  = useContext(Context)
  const [plannerArr, setPlannerArr] = useState([])
  // console.log(weekPlannerInfo);
  // console.log(plannerArr);

useEffect(() => {
weekPlannerInfo.setWeekPlaner({plannerArr})
}, [plannerArr])
   
    const handleSlotClick = (timeSlot, day) => {
        const slotObj = {timeSlot, day}
        setPlannerArr([...plannerArr, slotObj])
      }
 
    const columns = [
        {
          title: "Time Slot",
          dataIndex: "timeSlot",
          key: "timeSlot",
        },
        {
          title: "Mon",
          dataIndex: "monday",
          key: "monday",
          render: (_, record) => (
            <Radio
              type="radio"
              onClick={() => handleSlotClick(record.timeSlot, "monday")}
            />
          ),
        },
        {
          title: "Tue",
          dataIndex: "tuesday",
          key: "tuesday",
          render: (_, record) => (
            <Radio
              type="radio"
              onClick={() => handleSlotClick(record.timeSlot, "Tuesday")}
            />
          ),
        },
        {
          title: "Wed",
          dataIndex: "wednesday",
          key: "wednesday",
          render: (_, record) => (
            <Radio
              type="radio"
              onClick={() => handleSlotClick(record.timeSlot, "Wednesday")}
            />
          ),
        },
        {
          title: "Thu",
          dataIndex: "thursday",
          key: "thursday",
          render: (_, record) => (
            <Radio
              type="radio"
              onClick={() => handleSlotClick(record.timeSlot, "Thursday")}
            />
          ),
        },
        {
          title: "Fri",
          dataIndex: "friday",
          key: "friday",
          render: (_, record) => (
            <Radio
              type="radio"
              onClick={() => handleSlotClick(record.timeSlot, "Friday")}
            />
          ),
        },
        {
          title: "Sat",
          dataIndex: "saturday",
          key: "saturday",
          render: (_, record) => (
            <Radio
              type="radio"
              onClick={() => handleSlotClick(record.timeSlot, "Saturday")}
            />
          ),
        },
        {
          title: "Sun",
          dataIndex: "sunday",
          key: "sunday",
          render: (_, record) => (
            <Radio
              type="radio"
              onClick={() => handleSlotClick(record.timeSlot, "Sunday")}
            />
          ),
        },
      ];
    
      const data = [
        {
          key: "1",
          timeSlot: "Morning",
        },
        {
          key: "2",
          timeSlot: "Afternoon",
        },
        {
          key: "3",
          timeSlot: "Evening",
        },
        {
          key: "4",
          timeSlot: "Night",
        },
      ];
    

  return (
    
      <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          bordered={false}
          style={{ boxShadow: "0px 4.45934px 26.7561px rgba(0, 0, 0, 0.06)" }}
          rowKey="key"
        />
  )
}

export default TableForm