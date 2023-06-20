import serviceRequestModel from '../model/serviceRequest.js'

export const serviceRequest = async (req ,res) => {

    const { serviceReqBody } = req.body;
     console.log(serviceReqBody);

    try {
        const createServiceRequest = await serviceRequestModel.create(serviceReqBody);
        res.status(200).json({result: createServiceRequest})

    } catch (error) {
        res.status(404).json({message: error.message})
    }
} 

export const getServiceRequestList = async (req ,res) => {

    try {
        const serviceRequestList = await serviceRequestModel.find();
        res.status(200).json({result: serviceRequestList})

    } catch (error) {
        res.status(404).json({message: error.message})
    }
} 

