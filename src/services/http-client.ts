import axios from "axios";

const Http = axios.create({
  baseURL: "https://dashboard-application-vue.vercel.app:3000",
});

export { Http };
