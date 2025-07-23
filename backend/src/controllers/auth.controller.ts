// src/controllers/auth.controller.ts
import { Request, Response, RequestHandler } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { jwtConfig } from '../constants/config';
import prisma from '../prismadb';

export default {
  login: (async (req: Request, res: Response) => {
    try {
      const { username, password } = req.body;
      
      // Find user
      const user = await prisma.user.findUnique({ 
        where: { username },
        select: { id: true, username: true, password: true, role: true, isActive: true }
      });

      if (!user || !user.isActive) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      // Check password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      // Create tokens
      const accessToken = jwt.sign(
        { id: user.id, username: user.username, role: user.role },
        jwtConfig.secret,
        { expiresIn: '1h' }
      );

      const refreshToken = jwt.sign(
        { id: user.id },
       jwtConfig.secret,
        { expiresIn: '7d' }
      );

      // Save refresh token to user
      await prisma.user.update({
        where: { id: user.id },
        data: { refreshToken }
      });

      res.json({
        accessToken,
        refreshToken,
        user: {
          id: user.id,
          username: user.username,
          role: user.role
        }
      });
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  }) as RequestHandler,

  refreshToken: (async (req: Request, res: Response) => {
    try {
      const { refreshToken } = req.body;
      
      if (!refreshToken) {
        return res.status(401).json({ message: 'Refresh token required' });
      }

      // Verify refresh token
      const decodedUser = jwt.verify(refreshToken, jwtConfig.secret) as { id: string };

      // Find user
      const user = await prisma.user.findUnique({
        where: { id: decodedUser.id },
        select: { id: true, username: true, role: true, refreshToken: true, isActive: true}
      });

      if (!user || user.refreshToken !== refreshToken) {
        return res.status(403).json({ message: 'Invalid refresh token or user not found' });
      }

      // Create new access token
      const accessToken = jwt.sign(
        { id: user.id, username: user.username, role: user.role },
        jwtConfig.secret,
        { expiresIn: '1h' }
      );

      res.json({ accessToken });
    } catch (error) {
      res.status(403).json({ message: 'Invalid refresh token' });
    }
  }) as RequestHandler
};