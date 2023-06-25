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
  getCommentByIdWine(id: string, payload: RequestPayload) {
    const url = "/products/:id/comment/query";
    return axiosClient.post(url.replace(":id", id), payload.filter || {}, {
      params: payload.params,
    });
  },
};

export default productApi;
