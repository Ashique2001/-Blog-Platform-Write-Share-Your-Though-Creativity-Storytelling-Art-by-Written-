import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const API = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const fetchPosts = createAsyncThunk('posts/fetchAll', async () => {
  const res = await axios.get(`${API}/api/posts`);
  return res.data;
});

const postsSlice = createSlice({
  name: 'posts',
  initialState: { list: [], status: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  }
});

export default postsSlice.reducer;
