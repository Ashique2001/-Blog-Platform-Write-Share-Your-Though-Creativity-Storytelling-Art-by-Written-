import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const API = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const login = createAsyncThunk('auth/login', async ({ email, password }) => {
  const res = await axios.post(`${API}/api/auth/login`, { email, password });
  return res.data;
});

export const signup = createAsyncThunk('auth/signup', async (formData) => {
  const res = await axios.post(`${API}/api/auth/signup`, formData);
  return res.data;
});

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null, status: 'idle' },
  reducers: {
    logout(state){
      state.user = null;
      state.token = null;
      localStorage.removeItem('token');
    }
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem('token', action.payload.token);
    });
    builder.addCase(signup.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem('token', action.payload.token);
    });
  }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
