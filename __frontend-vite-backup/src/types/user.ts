import type { UserRole } from "./auth";

// Base user type
export interface User {
  id: string;
  username: string;
  email?: string;
  role: UserRole;
  isActive?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

// Data Transfer Objects (DTOs) for API requests
export interface CreateUserDto {
  username: string;
  password: string;
  email?: string;
  role?: UserRole;
  isActive?: boolean;
}

export interface UpdateUserDto {
  username?: string;
  password?: string;
  email?: string;
  role?: UserRole;
  isActive?: boolean;
}

// User query parameters (for filtering, pagination etc.)
export interface UserQueryParams {
  page?: number;
  limit?: number;
  search?: string;
  role?: UserRole;
  isActive?: boolean;
}