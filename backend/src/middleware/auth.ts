import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { jwtConfig } from "../constants/config";

export interface AuthenticatedRequest extends Request {
    user?: {
        id: string,
        username: string,
        role: "USER" | "ADMIN"
    };
}

export const authenticateJWT = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1]; // Bearer <token>
        jwt.verify(token, jwtConfig.secret, (err, user) => {
            if (err) {
                if (err.name === 'TokenExpiredError') {
                    return res.status(401).json({ message: 'Token expired' });
                }
                return res.sendStatus(403).json({ message: 'Invalid token' });
            }
            req.user = user as {
                id: string,
                username: string,
                role: "USER" | "ADMIN"
            };
            next();
        });
    } else {
        res.sendStatus(401).json({ message: 'Authorization header missing' });
    }
}

export const authorizeAdmin = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    if (req.user && req.user.role === "ADMIN") {
        next();
    } else {
        res.status(403).json({ message: 'Unauthorized: Admin access required' });
    }
}

// for non-admin users that logged in:
export const authorizeReadOnly = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    if (req.method !== 'GET') {
        return res.status(403).json({ message: 'Read-only access permitted' });
    }
    next();
}