import React from "react";
import "./paymentDetails.css";
import { Slider, Button, Form, Input } from "antd";

const PaymentDetails = ({ handleNext, handlePrivious }) => {

  const marks = {
    20: '20',
    25: '25',
    30: '30',
    35: '35',
    40: '40',
    45: '45'
  };

  const validateForm = () => {
    handleNext()
  }

  return (
    <main className="payment-details-main">
      <h2>What would you like to pay a housekeeper?</h2>
      <p>The average range in your area is $20 - $45.</p>
      <h3>Pay</h3>
      <div className="payment-range-wrapper">
        <div className="price-text-line-wrapper">
          <span>$20</span>
          <span>$25</span>
          <span>$30</span>
          <span>$35</span>
          <span>$40</span>
          <span>$45</span>
        </div>
        <Form.Item name="paymentSlider">
          <Slider
            range
            marks={marks}
            tooltip={{ open: false }}
            min={20}
            max={45}
          />
        </Form.Item>
      </div>
      <div className="slider-info">
        <span>Per Hour</span>
        <span>Per Hour</span>
      </div>
      <div className="payment-details-desc">
        <p>What else should housekeepers know?</p>
        <Form.Item
          name={"paymentBio"}
          rules={[
            {
              required: true,
              message: "please add payment bio",
            },
          ]}
        >
          <Input.TextArea
            className="payment-details-textarea"
            placeholder={'this is add all essential details about property & area size'}
          />
        </Form.Item>
      </div>
      <Form.Item className="payment-det-btn" onClick={validateForm}>
        <Button type="button" htmlType="button">
          Next
        </Button>
      </Form.Item>
      <Form.Item className="payment-det-btn">
        <Button type="button" htmlType="button" onClick={() => handlePrivious()}>
          Previous
        </Button>
      </Form.Item>
    </main>
  );
};

export default PaymentDetails;
