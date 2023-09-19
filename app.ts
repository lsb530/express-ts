import express, { Request, Response } from "express"

const app = express()

interface WelCome {
    name: string
    message: string
    url: string
}

const data: Partial<WelCome> = {
    name: 'boki',
    message: 'welcome programmers',
    url: 'https://code-boki.tistory.com/'
}

app.get("/", (req: Request, res: Response) => {
    res.send(data)
});

app.listen(3080);