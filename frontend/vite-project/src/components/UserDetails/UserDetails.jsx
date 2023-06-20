import React from 'react'
import './UserDetails.css'
import { Form, Input, Button } from 'antd'

const UserDetails = ({ handleNext, handlePrivious }) => {

  const validateForm = () => {
    handleNext()
  }

  return (
    <div>
        <Form.Item
          label="First Name"
          name="firstName"
          rules={[
            {
              required: true,
              message: "Please input your firstname!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Last Name"
          name="Last name"
          rules={[
            {
              required: true,
              message: "Please input your lastname!",
            },
          ]}
        >
          <Input  />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input type="email" />
        </Form.Item>
        <Form.Item
          label="Contact Number"
          name="contactNumber"
          rules={[
            {
              required: true,
              message: "Please input your contact Number!",
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
        </Form.Item>
    </div>
  )
}

export default UserDetails