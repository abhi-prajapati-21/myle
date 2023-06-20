import express from 'express'
import { getServiceRequestList, serviceRequest } from '../controller/serviceRequest.js'

const router = express.Router()

router.post('/add', serviceRequest)
router.get('/getList', getServiceRequestList)

export default router