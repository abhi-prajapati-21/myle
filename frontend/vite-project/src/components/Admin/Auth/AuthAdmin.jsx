import React, { useContext, useEffect, useState } from "react";
import { Form, Input, Button } from "antd";
import './authAdmin.css'
import { Context } from "../../../App";

const AuthAdmin = () => {

    const { logInfo } = useContext(Context)

   const [isSignup, setIsSignup] = useState(null)
   const [isSignupPage, setIsSignupPage] = useState(true)

    useEffect(() => {
      setIsSignup(JSON.parse(localStorage.getItem('Profile')));
    }, [])

    useEffect(() => {
        isSignup ? setIsSignupPage(false) : setIsSignupPage(true)
      }, [isSignup])

    console.log(isSignup);

  const onFinish = (data) => {
   !isSignup && localStorage.setItem('Profile', JSON.stringify(data))
   if (isSignup) {
       if (data.username !== isSignup.username) {
          alert('incorret username')
       }else if (data.password !== isSignup.password) {
        alert('incorret password')
     }
     else{
        localStorage.setItem('isLoggedIn', true)
        logInfo.setIsLoggedIn(true)
    }
}
}

  return (
    <Form
      name="basic"
      className="auth-admin"
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    //   onFinishFailed={onFinishFailed}
      autoComplete="off"
    >{
        isSignupPage && 

        <Form.Item
        label="role"
        name="role"
        rules={[
          {
            required: true,
            message: "Please input your role!",
          },
        ]}
      >
        <Input />
      </Form.Item>
    }

      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        {
            isSignupPage ? 'Signup' : 'Login'
        }
      </Button>
    </Form.Item>
    </Form>
  );
};

export default AuthAdmin;
