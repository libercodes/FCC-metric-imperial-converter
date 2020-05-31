import express, { Application } from 'express'
import dotenv from 'dotenv'
import { ApplicationRun } from './controller/Application'

import userRouter from './routes/user'

import cors from 'cors'
import helmet from 'helmet'
import bodyParser from 'body-parser'
dotenv.config()


const app: Application = express()

app.use(cors())
app.use(helmet())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', userRouter)

app.listen(process.env.PORT, ApplicationRun) 