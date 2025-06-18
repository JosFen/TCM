// src/controllers/user.controller.ts
import { Request, Response } from 'express';
import { UserService } from '../../services/admin/user.service';
import { CreateUserDto, UpdateUserDto } from '../../dtos/user.dto';

export const UserController = {
  // POST /users
  create: async (req: Request, res: Response) => {
    try {
      const user = await UserService.create(req.body);
      // Exclude password from the response
      const { password, ...userWithoutPassword } = user;
      res.status(201).json(userWithoutPassword);
    } catch (error) {
      res.status(400).json({ error: 'Invalid data' });
    }
  },

  // GET /users
  findAll: async (_: Request, res: Response) => {
    const users = await UserService.findAll();
    res.json(users);
  },

  // GET /users/:id
  findOne: async (req: Request, res: Response) => {
    const user = await UserService.findOne(req.params.id);
    user ? res.json(user) : res.status(404).json({ error: 'User not found' });
  },

  // PATCH /users/:id
  update: async (req: Request, res: Response) => {
    try {
      const user = await UserService.update(req.params.id, req.body);
      res.status(200).send(`Username "${user.username}" has been updated successfully`);
    } catch (error) {
      res.status(404).json({ error: 'User not found' });
    }
  },

  // DELETE /users/:id
  delete: async (req: Request, res: Response) => {
    try {
      await UserService.delete(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(404).json({ error: 'User not found' });
    }
  },
};