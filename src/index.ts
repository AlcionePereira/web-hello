import express, { Express, Request, Response } from "express"

const server: Express = express()

server.get('/', (req: Request, res: Response) => {
  res.json({ mensagem: "Hello World" })
})

server.listen(3000, () => {
  console.log("Servidor iniciado...")
})