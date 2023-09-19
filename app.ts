import express, { Request, Response } from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = process.env.SERVER_PORT

interface WelCome {
  name: string
  message: string
  url: string
}

const data: Partial<WelCome> = {
  name: 'boki',
  message: 'welcome programmers',
  url: 'https://code-boki.tistory.com/',
}

app.get('/', (req: Request, res: Response) => {
  res.send(data)
})

app.listen(port, () => {
  console.log(`server is listening at localhost:${port}`)
})
