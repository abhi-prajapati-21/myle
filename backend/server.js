import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import serviceRequestRoute from './routes/router.js'

const app = express()

app.use(cors())
app.use(express.json())
dotenv.config()

app.get('/', (req, res) => {
   res.send('server running')
})

app.use('/serviceRequest', serviceRequestRoute)

app.listen(process.env.PORT, () => {
    console.log('server running on 5000');
})

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((resp) => console.log("mongoose connected"))
    .catch((error) => console.log(error.message))

    