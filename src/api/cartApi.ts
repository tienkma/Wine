import { ListResponse, ProductEntity, RequestPayload } from "../models";
import axiosClient from "./axiosClient";

const cartApi = {
  getCarts: (): Promise<ListResponse<ProductEntity>> => {
    const url = "/products";
    return axiosClient.post(url);
  },
};

export default cartApi;
