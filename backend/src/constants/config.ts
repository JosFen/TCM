export const corsOptions = { 
    origin: process.env.CLIENT_URL || 'http://localhost:5173', 
    credentials: true 
};

export const jwtConfig = {
    secret: process.env.JWT_SECRET || 'secret',
    expiresIn: process.env.JWT_EXPIRES_IN || '1h',
};