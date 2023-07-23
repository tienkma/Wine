import { ListResponse, UserEntity, RequestPayload } from "../models";
import axiosClient from "./axiosClient";

const authApi = {
  register: (payload: {
    username: string;
    email: string;
    password: string;
  }): Promise<
    { token: string; user: UserEntity } & { error: { msg: string } }
  > => {
    const url = "/auth/register";
    return axiosClient.post(url, payload);
  },

  login: (payload: {
    email: string;
    password: string;
  }): Promise<
    { token: string; user: UserEntity } & { error: { msg: string } }
  > => {
    const url = "/auth/login";
    return axiosClient.post(url, payload);
  },
};

export default authApi;
