// Login credentials type
export interface LoginCredentials {
  username: string;
  password: string;
}

// Authentication response type
export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: {
    id: string;
    username: string;
    role: UserRole;
    isActive: boolean;
  };
}

// User roles (should match your backend)
export type UserRole = 'USER' | 'ADMIN';

// JWT payload type
export interface JwtPayload {
  id: string;
  username: string;
  role: UserRole;
  iat?: number;
  exp?: number;
}

// Refresh token response
export interface RefreshTokenResponse {
  accessToken: string;
}