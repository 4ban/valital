import express, { Express, Request, Response } from 'express'
import bodyParser from 'body-parser'
import { notFound, errorHandler } from './middlewares'
import { router } from './api'

const app: Express = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/api/v1', router)
app.get('/', (req: Request, res: Response) => {
  res.send('Hello Valital! I am alive!')
})
app.use(notFound)
app.use(errorHandler)

export default app
