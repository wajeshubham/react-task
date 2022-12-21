import axios from "axios";

export const SERVER_URL = "http://demo.tech2edge.co";

export const api = axios.create({
  baseURL: `${SERVER_URL}/samples`,
  headers: {
    "Content-Type": "application/json",
  },
});
