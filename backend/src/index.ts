import express, { Request, RequestHandler, Response } from "express"
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

  const user = await prisma.user.create({
    data: {
      username,
      password,
    },
    select: {
      id: true,
      username: true,
      createdAt: true,
      updatedAt: true,
    },
  })

  // Return the created user data in the response
  res.json({
    message: "User created successfully",
    user,  // Include the created user data in the response
  })
})

// delete endpoint:
app.delete("/delete", async (req: Request, res: Response) => {
  const { username } = req.body;

  if (!username) {
    return res.status(400).json({ message: "Username is required" });
  }

  try {
    const deletedUser = await prisma.user.delete({
      where: { username },
    });

    res.json({
      message: "User deleted successfully",
      deletedUser,
    });
  } catch (error: any) {
    console.error('Error during user deletion:', error);
    res.status(404).json({
      message: "User not found",
      error: error.message,
    });
  }
});


// const deleteUserHandler: RequestHandler = async (req: Request, res: Response) => {
//   const { id } = req.body;

//   if (!id) {
//     return res.status(400).json({ message: "ID is required" });
//   }

//   try {
//     const deletedUser = await prisma.user.delete({
//       where: { id },
//     });

//     return res.json({
//       message: "User deleted successfully",
//       deletedUser,
//     });
//   } catch (error: any) {
//     console.error("Error during user deletion:", error);
//     return res.status(404).json({
//       message: "User not found",
//       error: error.message,
//     });
//   }
// };

// app.delete("/delete", deleteUserHandler);



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})


// app.listen(PORT, () => {
//   console.log(`Server is listening on port ${PORT}`);
// }).on('error', (err) => {
//   console.error('Error starting server:', err);
// });
