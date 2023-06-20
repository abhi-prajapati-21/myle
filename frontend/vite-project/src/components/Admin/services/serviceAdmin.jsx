import { Table } from 'antd'
import React from 'react'
import { serviceData } from '../../Utility/utility';

const ServiceAdmin = () => {

  const columns = [
    {
      title: 'Services',
      dataIndex: "name",
    }
  ];

  return (
    <Table dataSource={serviceData} columns={columns} />
  )
}

export default ServiceAdmin