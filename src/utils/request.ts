import axios, { AxiosResponse } from "axios";
import { Storage } from "./local";

interface response extends AxiosResponse {
  error: { msg: string };
}

class requests {
  headers(params?: any) {
    const token = Storage.getLocal("token");
    return {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        "Access-Control-Allow-Origin": "*",
      },
      params,
    };
  }
  async get(path: string, params?: any) {
    const response: response = await axios.get(path, this.headers(params));
    if (response.data) {
      return response.data;
    }
    return response;
  }
  async post(path: string, option: any, params?: any) {
    const response: response = await axios.post(
      path,
      option,
      this.headers(params)
    );
    if (response.data) {
      return response.data;
    }
    return response;
  }
  async put(path: string, option: any, params?: any) {
    const response: response = await axios.put(
      path,
      option,
      this.headers(params)
    );
    if (response.data) {
      return response.data;
    }
    return response;
  }
  async delete(path: string, params?: any) {
    const response: response = await axios.delete(path, this.headers(params));
    if (response.data) {
      return response.data;
    }
    return response;
  }
}

export const Requests = new requests();
