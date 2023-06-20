import React, { useEffect, useState } from "react";
import "./serviceTask.css";
import { Button, Checkbox, Form } from "antd";
import { TaskData } from '../Utility/utility'

const ServiceTask = ({ handleNext, handlePrivious }) => {

  const [tasks, setTask] = useState([]);
  const [serviceTasksData, setServiceTasksData] = useState({})
  const [isCheaked, setIsCheaked] = useState(null);

  useEffect(() => {setServiceTasksData({tasks})}, [tasks])

  const oncheck = (newTask, checked) => {
    if (checked) {
      // console.log(checked);
      setIsCheaked(true);
      setTask((preTask) => [...preTask, newTask]);
    } else {
      setTask((preTask) => preTask.filter((task) => task.id !== newTask.id));
      // setIsCheaked(false)
      setIsCheaked(tasks.length < 1 ? null : false);
    }
  };
  // console.log(isCheaked);
  
  const validateForm = () => {
     tasks.length > 0 ? handleNext(serviceTasksData) : setIsCheaked(false);
  };

  // console.log(serviceTasksData);
  // console.log(tasks);

  return (
    <div className="service-task">
      <main>
        {TaskData.map((value) => (
          <div className="task" style={{ color: "black" }} key={value.id}>
            <span>{value.task_name}</span>
            <Form.Item valuePropName="checked">
              <Checkbox onChange={(e) => oncheck(value, e.target.checked)} />
            </Form.Item>
          </div>
        ))}
         
        {isCheaked === false && <span> please choose any field </span>}
        <Form.Item>
          <Button type="button" onClick={validateForm}>
            Next
          </Button>
        </Form.Item>
        <Form.Item>
          <Button type="button" onClick={() => handlePrivious()}>
            previous
          </Button>
        </Form.Item>
      </main>
    </div>
  );
};

export default ServiceTask;
