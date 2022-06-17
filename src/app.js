import express from 'express'
import morgan from 'morgan'
import path from 'path'

import apiRouter from './routes/api.router'

// initializations
const app = express()

// settings
app.set('port', process.env.PORT || 3000)

// middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// routes
app.use('/api', apiRouter)

// static files
app.use(express.static(path.join(__dirname, 'public')))

export default app