import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import postRouter from './router/PostRouter'

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

app.use(express.json())
app.set('json spaces', 2)
app.use('/posts', postRouter)

app.listen(port, () => {
  console.log(`server is listening at localhost:${port}`)
})
