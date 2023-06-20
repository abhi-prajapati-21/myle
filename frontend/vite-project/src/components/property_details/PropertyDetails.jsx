import React, { useState } from "react";
import { Form, Radio, Select, Input, Button } from "antd";
import { PropDetailsData } from "../Utility/utility.js";
import "./propertyDetails.css";

const PropertyDetails = ({ handleNext, handlePrivious }) => {
  
  const [isCheaked, setIsCheaked] = useState(null);

  const options = [];
  for (let i = 1; i <= 10; i++) {
    options.push({ value: i });
  }
  const validateForm = () => {
    // task.length > 0 ? handleNext(task) : setIsCheaked(false);
    handleNext();
  };

  // const oncheck = (newTask, checked) => {
  //   if (checked) {
  //     setIsCheaked(true);
  //     setTask((preTask) => [...preTask, newTask]);
  //   } else {
  //     setTask((preTask) => preTask.filter((task) => task.id !== newTask.id));
  //     // setIsCheaked(false)
  //     setIsCheaked(task.length < 1 ? null : false);
  //   }
  // };
  return (
    <div className="property-details-page">
      <h2>Tell us about Property Details </h2>
      <div className="property-checkbox">
        <div className="task" style={{ color: "black" }}>
          <Form.Item
            name="PropertyName"
            rules={[{ required: true, message: `Please select any ` }]}
          >
            <Radio.Group>
              {PropDetailsData.map((item) => (
                <Radio.Button key={item.id} value={item.label}>{item.label}</Radio.Button>
              ))}
            </Radio.Group>
          </Form.Item>
          {/* <span>Service Name</span>
          <Form.Item valuePropName="checked" rules={[{ required: true, message: `Please select service` }]}>
            <Checkbox onChange={(e) => oncheck("label", e.target.checked)} />
          </Form.Item>
        </div>
        <div className="task" style={{ color: "black" }}>
          <span>Service Name</span>
          <Form.Item valuePropName="checked" rules={[{ required: true, message: `Please select service` }]} >
            <Checkbox onChange={(e) => oncheck("labesdl", e.target.checked)} />
          </Form.Item> */}
        </div>
      </div>
      <div className="prop-dropdown">
        <Form.Item
          label="badroom"
          name={"badroom"}
          rules={[{ required: true, message: `Please select service` }]}
        >
          <Select options={options} />
        </Form.Item>
        <Form.Item
          label="bathroom"
          name={"bathroom"}
          rules={[{ required: true, message: `Please select service` }]}
        >
          <Select options={options} />
        </Form.Item>
        <h5>
          {isCheaked === false && <span>Please select atleast one field</span>}
        </h5>
      </div>
      <Form.Item
        name={"property-desc"}
        label="Property Description"
        rules={[{ required: true, message: `Please give description` }]}
      >
        <Input />
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
      </Form.Item>
    </div>
  );
};

export default PropertyDetails;
