import axios from "axios";

const API = axios.create({
  baseURL: "https://learning-backend-1-zpec.onrender.com/api",
});

export default API;
