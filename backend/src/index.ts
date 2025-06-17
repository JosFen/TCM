// to be renamed to app.ts
// src/app.ts
import express from 'express';
import { UserController } from './controllers/admin/user.controller';

const app = express();
app.use(express.json());

// Routes
app.post('/users', UserController.create);
app.get('/users', UserController.findAll);
app.get('/users/:id', UserController.findOne);
app.patch('/users/:id', UserController.update);
app.delete('/users/:id', UserController.delete);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
// import express, { Request, Response } from "express";
// import "dotenv/config";
// import cors from "cors";
// import { corsOptions } from "./constants/config";
// import { PrismaClient } from './generated/prisma';

// const prisma = new PrismaClient();

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cors(corsOptions));

// // Type definitions for request bodies
// interface DeleteUserRequest {
//     username: string;
// }

// interface UpdatePasswordRequest {
//     username: string;
//     newPassword: string;
// }

// // Helper type for async route handlers
// type AsyncRouteHandler = (req: Request, res: Response) => Promise<void>;

// // for testing setup:
// app.get("/", (req: Request, res: Response) => {
//     res.json({
//         message: "Hello, TypeScript with Express! Updated!",
//         client_url: "http://frontend:5173",
//     });
// });

// app.post("/register", (async (req: Request, res: Response) => {
//     const { username, password } = req.body;

//     const user = await prisma.user.create({
//         data: {
//             username,
//             password,
//         },
//         select: {
//             id: true,
//             username: true,
//             createdAt: true,
//             updatedAt: true,
//         },
//     });

//     res.json({
//         message: "User created successfully",
//         user,
//     });
// }) as AsyncRouteHandler);

// // Delete user by username
// app.delete('/delete', (async (req: Request, res: Response) => {
//     const { username } = req.body as DeleteUserRequest;

//     if (!username) {
//         res.status(400).json({ error: 'Username is required' });
//         return;
//     }

//     try {
//         const deletedUser = await prisma.user.delete({
//             where: { username }
//         });

//         res.status(200).json({
//             message: 'User deleted successfully',
//             deletedUser
//         });
//     } catch (error: unknown) {
//         if (error instanceof Error) {
//             if (error.message.includes('Record to delete does not exist')) {
//                 res.status(404).json({ error: 'User not found' });
//                 return;
//             }
//             res.status(500).json({ error: error.message });
//         } else {
//             res.status(500).json({ error: 'An unknown error occurred' });
//         }
//     }
// }) as AsyncRouteHandler);

// // Update user password
// app.patch('/update-password', (async (req: Request, res: Response) => {
//     const { username, newPassword } = req.body as UpdatePasswordRequest;

//     if (!username || !newPassword) {
//         res.status(400).json({ 
//             error: 'Both username and newPassword are required' 
//         });
//         return;
//     }

//     try {
//         const updatedUser = await prisma.user.update({
//             where: { username },
//             data: { password: newPassword }
//         });

//         res.status(200).json({
//             message: 'Password updated successfully',
//             updatedUser: {
//                 id: updatedUser.id,
//                 username: updatedUser.username,
//                 createdAt: updatedUser.createdAt
//             }
//         });
//     } catch (error: unknown) {
//         if (error instanceof Error) {
//             if (error.message.includes('Record to update not found')) {
//                 res.status(404).json({ error: 'User not found' });
//                 return;
//             }
//             res.status(500).json({ error: error.message });
//         } else {
//             res.status(500).json({ error: 'An unknown error occurred' });
//         }
//     }
// }) as AsyncRouteHandler);

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });