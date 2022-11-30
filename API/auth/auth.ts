import axios from "axios";
import { loginDTO } from "./dto";

class AuthAPI {
  instanse = axios.create({
    baseURL: "http://localhost:3000/api/auth/",
    withCredentials: true,
  });

  async auth() {
    return await (
      await this.instanse.get("auth")
    ).data;
  }

  async login(data: loginDTO) {
    return await this.instanse.post("login", data);
  }
}

export const authAPI = new AuthAPI();
