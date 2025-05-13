import express, { Request, Response } from "express"
import "dotenv/config"
import cors from "cors"
import { corsOptions } from "./constants/config"
import { PrismaClient } from './generated/prisma'

const prisma = new PrismaClient()

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors(corsOptions));

// for testing setup:
app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Hello, TypeScript with Express! Updated!",
    client_url: "http://frontend:5173",
  })
})

app.post("/register", async (req: Request, res: Response) => {
  const {  username, password } = req.body

  await prisma.user.create({
    data: {
      username,
      password,
    },
  })

  res.json({
    message: "User created successfully",
  })
})

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`)
// })

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
}).on('error', (err) => {
  console.error('Error starting server:', err);
});
