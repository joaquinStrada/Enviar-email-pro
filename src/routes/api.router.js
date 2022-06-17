import { Router } from 'express'
import { sendEmail } from '../controllers/api.controller'

const router = Router()

router.post('/send-email', sendEmail)

export default router