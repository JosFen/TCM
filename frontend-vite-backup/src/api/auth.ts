import axios from 'axios';
import type { LoginCredentials, AuthResponse } from '../types/auth';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api/v1';

export const login = async (credentials: LoginCredentials): Promise<AuthResponse> => {
  const response = await axios.post(`${API_BASE_URL}/auth/login`, credentials);
  return response.data;
};

export const refreshToken = async (refreshToken: string): Promise<{ accessToken: string }> => {
  const response = await axios.post(`${API_BASE_URL}/auth/refresh-token`, { refreshToken });
  return response.data;
};