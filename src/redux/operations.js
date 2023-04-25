import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const agent = axios.create({
  baseURL: "https://64459f4f0431e885f0015baa.mockapi.io",
});

export const fetchAllUsers = createAsyncThunk(
  "users/fetchAllUsers",
  async (signal, { rejectWithValue }) => {
    try {
      const response = await agent.get("/users", {
        signal,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchUsersByPage = createAsyncThunk(
  "users/fetchUsers",
  async ({ page, limit }, { rejectWithValue }) => {
    try {
      const response = await agent.get("/users", {
        params: { page, limit },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const toggleFollow = createAsyncThunk(
  "users/toggleFollow",
  async (user, { rejectWithValue }) => {
    try {
      const response = await agent.put(`users/${user.id}`, user);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
