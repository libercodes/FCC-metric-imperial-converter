import express, { Router } from 'express'
import * as userController from '../controller/User'

const router: Router = express.Router()

router.get('/convert', userController.convert)

export default router