import React, { useContext, useEffect } from "react";
import axios from "axios";
import { Context } from "../../App";

const ThankYouPage = () => {

  const { steperContext } = useContext(Context);
  
  const sendSteperData = async () => {
    await axios.post(`http://localhost:5000/serviceRequest/add`, {
      serviceReqBody: steperContext.finalMaskedObj
    });
  };
  useEffect(() => {
    sendSteperData();
  }, []);

  return <h1>Thank You Page</h1>;
};

export default ThankYouPage;
