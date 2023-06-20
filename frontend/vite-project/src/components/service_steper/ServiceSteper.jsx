import { useContext, useReducer, useState } from "react";
import { Button, message, Form } from "antd";
import Service from "../service/Service";
import {appReducer} from '../../Reducer/reducer'
import ServiceTask from "../service_task/ServiceTask";
import PropertyDetails from "../property_details/PropertyDetails";
import AddressDetails from '../address_details/AddressDetails'
import UserDetails from '../UserDetails/UserDetails'
import Schedule from "../schedule/Schedule";
import PaymentDetails from '../PaymentDetails/PaymentDetails'
import ThankYouPage from "../thankyou/ThankYouPage";
import { Context } from "../../App";

const ServiceSteper = () => {

  const initialState = 0;
  const [current, dispatch] = useReducer(appReducer, initialState);

  const [serviceForm] = Form.useForm();

  const { steperContext } = useContext(Context);

  const handleNext = (data) => {
    // console.log(data);
    serviceForm
      .validateFields()
      .then((value) => {
        // console.log(value);
        if (data) {
          steperContext.setFinalSteperContext([
            ...steperContext.finalSteperContext,
            { ...data },
          ]);
          if (value) {
            steperContext.setFinalSteperContext([
              ...steperContext.finalSteperContext,
              { ...data },
              { ...value },
            ]);
          }
        } else {
          steperContext.setFinalSteperContext([
            ...steperContext.finalSteperContext,
            { ...value },
          ]);
        }
        dispatch({ type: "NEXT" });
      })
      .catch((err) => console.log(err));
  };
   console.log(steperContext.finalMaskedObj);

  const handlePrivious = () => {
    dispatch({ type: "PREVIOUS" });
  };

  const steps = [
      {
        title: "First",
        content: (
          <Service handleNext={handleNext} handlePrivious={handlePrivious} />
        ),
      },
      {
        title: "Second",
        content: (
          <ServiceTask handleNext={handleNext} handlePrivious={handlePrivious} />
        ),
      },
     {
       title: "Last",
       content: (
         <PropertyDetails
           handleNext={handleNext}
           handlePrivious={handlePrivious}
         />
       ),
     },
     {
       title: "Last",
       content: (
         <AddressDetails
           handleNext={handleNext}
           handlePrivious={handlePrivious}
         />
       ),
     },
     {
       title: "Last",
       content: (
         <UserDetails handleNext={handleNext} handlePrivious={handlePrivious} />
       ),
     },
     {
       title: "Last",
       content: (
         <Schedule handleNext={handleNext} handlePrivious={handlePrivious} />
       ),
     },
    {
      title: "Last",
      content: (
        <PaymentDetails
          handleNext={handleNext}
          handlePrivious={handlePrivious}
        />
      ),
    },
    {
      title: "Last",
      content: <ThankYouPage />,
    },
  ];


  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  return (
    <>
      <div>
        <Form
          name="serviceForm"
          form={serviceForm}
          initialValues={{
            paymentSlider: [30, 40],
            badroom: 2,
            bathroom: 2,
            schedule: "Recurring",
            "recurring-time": "day",
            recurringHours: "1 hour",
            onTimeHour: "1 hour",
            flexibleHour: "1 hour",
          }}
          style={{display: 'flex', justifyContent: 'center'}}
        >
          {steps[current].content}
        </Form>
      </div>
    </>
  );
};

export default ServiceSteper;
