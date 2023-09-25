import axios, { AxiosInstance } from "axios";

const Axios: AxiosInstance = axios.create({
  baseURL: "http://localhost:4000",
  withCredentials: true,
});
export default Axios;