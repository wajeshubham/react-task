import axios from "axios";

// Following is the vite way to import environment variable
export const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const api = axios.create({
  baseURL: `${SERVER_URL}/samples`,
  headers: {
    "Content-Type": "application/json",
  },
});
