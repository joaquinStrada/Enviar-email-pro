import express from 'express'
import morgan from 'morgan'
import path from 'path'

// initializations
const app = express()

// settings
app.set('port', process.env.PORT || 3000)

// middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// routes

// static files
app.use(express.static(path.join(__dirname, 'public')))

export default app