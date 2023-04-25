import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const agent = axios.create({
  baseURL: "https://64459f4f0431e885f0015baa.mockapi.io",
});

export const fetchFilteredUsers = createAsyncThunk(
  "users/fetchFilteredUsers",
  async ({ filter, signal }, { rejectWithValue }) => {
    try {
      const response = await agent.get("/users", {
        signal,
      });
      switch (filter) {
        case "all":
          return response.data;
        case "followed":
          return response.data.filter((user) => user.isFollowing);
        case "notFollowed":
          return response.data.filter((user) => !user.isFollowing);
        default:
          return;
      }
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
