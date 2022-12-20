import axios from "axios";

const SERVER_URL = "http://demo.tech2edge.co";

export const api = axios.create({
  baseURL: SERVER_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
