import { ListResponse, ProductEntity, RequestPayload } from "../models";
import axiosClient from "./axiosClient";

const productApi = {
  getListProduct({
    filter,
    params,
  }: RequestPayload): Promise<ListResponse<ProductEntity>> {
    const url = "/products";
    return axiosClient.post(url, filter || {}, { params });
  },
  getWine(id: string) {
    const url = "/products/:id";
    return axiosClient.get(url.replace(":id", id));
  },
};

export default productApi;
