import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const agent = axios.create({
  baseURL: "https://64459f4f0431e885f0015baa.mockapi.io",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export const fetchFilteredUsers = createAsyncThunk(
  "users/fetchFilteredUsers",
  async ({ filter, signal }, { rejectWithValue }) => {
    try {
      const response = await agent.get("/users", {
        signal,
      });
      switch (filter.value) {
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

export const getUserById = createAsyncThunk(
  "users/getUserById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await agent.get(`users/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getUserWithMostTweets = createAsyncThunk(
  "users/searchUserWithMostTweets",
  async (users, { rejectWithValue }) => {
    try {
      let userWithMostTweets;
      let maxTweets = 0;

      users.forEach((user) => {
        if (user.tweets > maxTweets) {
          maxTweets = user.tweets;
          userWithMostTweets = user;
        }
      });

      return userWithMostTweets;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getUserWithMostFollowers = createAsyncThunk(
  "users/searchUserWithMostFollowers",
  async (users, { rejectWithValue }) => {
    try {
      let userWithMostFollowers;
      let maxFollowers = 0;

      users.forEach((user) => {
        if (user.followers > maxFollowers) {
          maxFollowers = user.followers;
          userWithMostFollowers = user;
        }
      });

      return userWithMostFollowers;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getAllUsers = createAsyncThunk(
  "users/fetchAllUsers",
  async ({ signal }, { rejectWithValue }) => {
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
