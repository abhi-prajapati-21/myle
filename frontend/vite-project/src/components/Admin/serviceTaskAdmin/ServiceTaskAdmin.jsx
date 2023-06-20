import React from 'react'
import { Table } from 'antd';
import { serviceTasks } from '../../Utility/utility';

const ServiceTaskAdmin = () => {

  const columns = [
    {
      title: 'Name',
      dataIndex: "serviceTaskName",
      //  render: (data) => data.map(item => item.value)
    },
    {
      title: 'Service Name',
      dataIndex: "serviceName",
      // render: (data) => renderServiceDataArr(data),
    }
  ];

  return (
    <Table dataSource={serviceTasks} columns={columns} />
  )
}

export default ServiceTaskAdmin