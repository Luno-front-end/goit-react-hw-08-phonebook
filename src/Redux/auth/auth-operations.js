import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com";
// let auth = axios.defaults.headers.common.Authorization;

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Barer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = createAsyncThunk("auth/register", async (credentials) => {
  try {
    const { data } = await axios.post("/users/signup", credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    if (error) {
      // return console.log(error.message);
    }
  }
});

const logIn = createAsyncThunk("auth/logIn", async (credentials) => {
  try {
    const { data } = await axios.post("/users/login", credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    // return alert(error.message);
  }
});

const logOut = createAsyncThunk("auth/logout", async () => {
  try {
    const { data } = await axios.post("/users/logout");
    token.unset();
    return data;
  } catch (error) {
    // return alert(error.message);
  }
});

const authOperations = {
  register,
  logIn,
  logOut,
};

export default authOperations;
