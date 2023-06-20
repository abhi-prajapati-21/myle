import mongoose, { Schema } from "mongoose";

const serviceRequestModel = new Schema({
  serviceId: { type: String },
  serviceName: { type: String },
  serviceTasks: { type: Array, default: [] },
  propertyDetails: { type: Object, default:{} },
  addressDetails: { type: Object, default: {} },
  userDetails: { type: Object, default: {} },
  schedule: { type: Object, default: {} },
  paymentDetails: { type: Object, default: {} },
});

export default mongoose.model('ServiceSchema', serviceRequestModel);
