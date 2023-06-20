import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "antd";

const ServiceRequestAdmin = () => {
  const [serviceRequestList, setServiceRequestList] = useState();

  useEffect(() => {

    const getServiceRequestList = async () => {
      const list = await axios.get(
        "http://localhost:5000/serviceRequest/getList"
      );
      setServiceRequestList(list?.data?.result);
    };
    getServiceRequestList();
  }, []);

  console.log(serviceRequestList);

  const renderServiceTasks = (tasks) => {
    console.log(tasks);
    return tasks.map((task) => <p key={task.id}>{task.task_name}</p>);
  };

  const renderUserDetails = (data) => {
    const columns = [
      {
        title: '',
        dataIndex: "key",
        rowScope: "row",
      },
      {
        title: '',
        dataIndex: "value",
      }
    ];
    const objData = [
      {
        key: 'first name',
        value: data.firstName

      },
      {
        key: 'last name',
        value: data['Last name']
      },
      {
        key: 'email',
        value: data.email
      },
      {
        key: 'contact-num',
        value: data.contactNumber

      },
    ];
    console.log(data);

    return (
      <>
        <Table dataSource={objData} columns={columns} pagination={false} />
      </>
    );
  };
  const renderAddressDetails = (data) => {
    const columns = [
      {
        title: '',
        dataIndex: "key",
        rowScope: "row",
      },
      {
        title: '',
        dataIndex: "value",
      }
    ];
    const objData = [
      {
        key: 'address',
        value: data.address

      },
      {
        key: 'apartment',
        value: data.apartment
      },
      {
        key: 'city',
        value: data.city
      },
      {
        key: 'pincode',
        value: data['Postal Code']
      },
    ];
    return (
      <>
        <Table dataSource={objData} columns={columns} pagination={false} />
      </>
    );
  };
  const renderSchedule = (data) => {
    const columns = [
      {
        title: '',
        dataIndex: "key",
        rowScope: "row",
      },
      {
        title: '',
        dataIndex: "value",
      }
    ];
    const objData = [
      {
        key: 'type',
        value: data.schedule

      },
      {
        key: 'date',
        value: data.date
      },
      {
        key: 'Hour',
        value: data.recurringHours
      },
    ];

    return (
      <>
        <Table dataSource={objData} columns={columns} pagination={false} />
      </>
    );
  };
  const renderServiceDetails = (data) => {

    console.log(data);
    const columns = [
      {
        title: '',
        dataIndex: "key",
        rowScope: "row",
      },
      {
        title: '',
        dataIndex: "value",
      }
    ];
    const objData = [
      {
        key: 'type',
        value: data?.PropertyName

      },
      {
        key: 'bedroom',
        value: data?.badroom

      },
      {
        key: 'bathroom',
        value: data?.bathroom
      },
      {
        key: 'Description',
        value: data['property-desc']
      },
    ];

    return (
      <>
        <Table dataSource={objData} columns={columns} pagination={false} />
      </>
    );
  };
  const renderPaymentDetails = (data) => {
      const columns = [
      {
        title: '',
        dataIndex: "key",
        rowScope: "row",
      },
      {
        title: '',
        dataIndex: "value",
      }
    ];
    const objData = [
      {
        key: 'Payment Range',
        value: data.paymentBio

      },
      {
        key: 'Desc',
        value: `${data.paymentSlider[0]}$  to  ${data.paymentSlider[1]}$ `
      }
    ];
    return (
      <>
        <Table dataSource={objData} columns={columns} pagination={false} />
      </>
    );
  };

  const columns = [
    {
      title: "Service Name",
      dataIndex: "serviceName",
      key: "serviceName",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Service Tasks",
      dataIndex: "serviceTasks",
      key: "serviceTasks",
      render: (tasks) => renderServiceTasks(tasks),
    },
    {
      title: "User Details",
      dataIndex: "userDetails",
      key: "userDetails",
      render: (data) => renderUserDetails(data),
    },
    {
      title: "Address",
      dataIndex: "addressDetails",
      key: "addressDetails",
      render: (data) => renderAddressDetails(data),
    },
    {
      title: "Schedule",
      dataIndex: "schedule",
      key: "schedule",
      render: (data) => renderSchedule(data),
    },
    {
      title: "Service Details",
      dataIndex: "propertyDetails",
      key: "serviceDetails",
      render: (data) => renderServiceDetails(data),
    },
    {
      title: "Payment Details",
      dataIndex: "paymentDetails",
      key: "paymentDetails",
      render: (data) => renderPaymentDetails(data),
    },
  ];

  return <Table columns={columns} dataSource={serviceRequestList} />;
};

export default ServiceRequestAdmin;
