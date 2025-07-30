import axios from 'axios';
import type { User, CreateUserDto, UpdateUserDto } from '../types/user';

const API_BASE_URL =  import.meta.env.VITE_API_URL || 'http://localhost:3000/api/v1';

const getAuthHeaders = () => {
  const token = localStorage.getItem('accessToken');
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const getUsers = async (): Promise<User[]> => {
  const response = await axios.get(`${API_BASE_URL}/users`, getAuthHeaders());
  return response.data;
};

export const createUser = async (userData: CreateUserDto): Promise<User> => {
  const response = await axios.post(`${API_BASE_URL}/users/register`, userData, getAuthHeaders());
  return response.data;
};

export const updateUser = async (id: string, userData: UpdateUserDto): Promise<User> => {
  const response = await axios.patch(`${API_BASE_URL}/users/${id}`, userData, getAuthHeaders());
  return response.data;
};

export const deleteUser = async (id: string): Promise<void> => {
  await axios.delete(`${API_BASE_URL}/users/${id}`, getAuthHeaders());
};