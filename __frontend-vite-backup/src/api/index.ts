// src/api/index.ts

// Auth API
export { login, refreshToken } from './auth';
export type { LoginCredentials, AuthResponse } from '../types/auth';

// Users API
export { 
  getUsers, 
  createUser, 
  updateUser, 
  deleteUser 
} from './users';
export type { 
  User, 
  CreateUserDto, 
  UpdateUserDto 
} from '../types/user';

// Plant Taxonomy API
// export { 
//   getPlantTaxonomies,
//   createPlantTaxonomy,
//   // ...other plant taxonomy functions
// } from './plantTaxonomy';
// export type { PlantTaxonomy } from '../types/plantTaxonomy';

// Add other API exports as needed for your modules
// import axios from 'axios';
// import { getToken } from './auth';

// const apiClient = axios.create({
//   baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api/v1',
// });

// apiClient.interceptors.request.use((config) => {
//   const token = getToken();
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// export default apiClient;