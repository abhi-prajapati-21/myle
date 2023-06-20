import React, { useReducer, useState } from "react";
import "./Service.css";
import { Button, Form, Radio } from "antd";
import { serviceData } from "../Utility/utility";

const Service = ({ handleNext, handlePrevious }) => {
  
  const [isSelected, setIsSelected] = useState(null);

  const handleRadioBtn = (e) => {
    setIsSelected(e.target.value ? true : false);
    // setService(e.target.value)
  };

  const handleFormValidate = () => {
    setIsSelected(isSelected ? true : false);
    isSelected ? handleNext() : null;
  };

  return (
    <div className="service-page">
  
        <Form.Item
          name="serviceName"
          rules={[{ required: true, message: `Please select service ` }]}
        >
          <Radio.Group>
            {serviceData.map((item) => (
              <Radio.Button key={item.id} value={item.name} onClick={(e) => handleRadioBtn(e)}>
                {item.name}
              </Radio.Button>
            ))}
          </Radio.Group>
        </Form.Item>
        {isSelected === false && <p>please select any field</p>}
        <Form.Item>
          <Button htmlType="button" onClick={handleFormValidate}>
            next
          </Button>
          <Button htmlType="button" onClick={() => handlePrevious()}>
            previous
          </Button>
        </Form.Item>

    </div>
  );
};

export default Service;
