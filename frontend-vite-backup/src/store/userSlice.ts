/* eslint-disable @typescript-eslint/no-explicit-any */
// src/store/userSlice.ts
import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit';
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  type User,
  type CreateUserDto,
  type UpdateUserDto
} from '../api';

interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
  currentUser: User | null;
  success: boolean;
}

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
  currentUser: null,
  success: false
};

// Async thunks
export const fetchUsers = createAsyncThunk(
  'users/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      return await getUsers();
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch users');
    }
  }
);

export const addUser = createAsyncThunk(
  'users/create',
  async (userData: CreateUserDto, { rejectWithValue }) => {
    try {
      return await createUser(userData);
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to create user');
    }
  }
);

export const modifyUser = createAsyncThunk(
  'users/update',
  async ({ id, userData }: { id: string; userData: UpdateUserDto }, { rejectWithValue }) => {
    try {
      return await updateUser(id, userData);
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to update user');
    }
  }
);

export const removeUser = createAsyncThunk(
  'users/delete',
  async (id: string, { rejectWithValue }) => {
    try {
      await deleteUser(id);
      return id;
    } catch (error : any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to delete user');
    }
  }
);

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    resetUserState(state) {
      state.success = false;
      state.error = null;
    },
    setCurrentUser(state, action: PayloadAction<User | null>) {
      state.currentUser = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      // Fetch Users
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      
      // Create User
      .addCase(addUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(addUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.users.push(action.payload);
        state.success = true;
      })
      .addCase(addUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      
      // Update User
      .addCase(modifyUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(modifyUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        const index = state.users.findIndex(user => user.id === action.payload.id);
        if (index !== -1) {
          state.users[index] = action.payload;
        }
        state.success = true;
      })
      .addCase(modifyUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      
      // Delete User
      .addCase(removeUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(removeUser.fulfilled, (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.users = state.users.filter(user => user.id !== action.payload);
        state.success = true;
      })
      .addCase(removeUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  }
});

export const { resetUserState, setCurrentUser } = userSlice.actions;
export default userSlice.reducer;