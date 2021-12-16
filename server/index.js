import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import Router from './routes/routes.js'

const app = express();
app.use(cors())
app.use(express.json({ limit: '30mb', extended: true }));
dotenv.config()


const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.DB,{ useNewUrlParser: true,useUnifiedTopology: true })
.then((app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`)})))
.catch(err => console.log(err))

app.use('/', Router)