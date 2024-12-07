import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.20.24:10573/api/",
});

export default api;
