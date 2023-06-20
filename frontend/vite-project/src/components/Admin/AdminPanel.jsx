import React, { useContext, useState } from "react";
import "./adminPanel.css";
import { Button, Menu, Layout } from "antd";
import ServiceAdmin from "./services/serviceAdmin";
import ServiceTaskAdmin from "./serviceTaskAdmin/ServiceTaskAdmin";
import ServiceRequestAdmin from "./serviceRequestAdmin/serviceRequestAdmin";
import {
  MenuFoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Context } from "../../App";

const AdminPanel = () => {

  const { logInfo } = useContext(Context)

  const { Header, Sider, Content } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const [key, setKey] = useState("/service");

  const routeHandler = () => {

    if(key === '/logout') {
      logInfo.setIsLoggedIn(false) 
      localStorage.removeItem('isLoggedIn')
    }

    switch (key) {
      case "/service":
        return <ServiceAdmin />;
      case "/serviceTask":
        return <ServiceTaskAdmin />;
      case "/serviceRequest":
        return <ServiceRequestAdmin />;
      default:
        break;
    }
  };

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["/service"]}
          onClick={(e) => setKey(e?.key)}
          items={[
            {
              icon: <UserOutlined />,
              label: "services",
              key: "/service",
            },
            {
              
              icon: <VideoCameraOutlined />,
              label: "Service Task",
              key: "/serviceTask",
            },
            {
             
              icon: <UploadOutlined />,
              label: "Service Request",
              key: "/serviceRequest",
            },
            {
              
              icon: <UploadOutlined />,
              label: "Logout",
              key: "/logout",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            backgroundColor: "whitesmoke",
            display: "flex",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            overflowX: 'scroll',
            color: "black",
          }}
        >
          {routeHandler()}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminPanel;
