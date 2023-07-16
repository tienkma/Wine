import { ListResponse, OrderEntity, RequestPayload } from "../models";
import axiosClient from "./axiosClient";

const orderApi = {
  getListOrder({
    filter,
    params,
  }: RequestPayload): Promise<ListResponse<OrderEntity>> {
    const url = "/orders/query?limit=100&page=1";
    return axiosClient.post(url, filter || {}, { params });
  },
  getWine(id: string) {
    const url = "/orders/:id";
    return axiosClient.get(url.replace(":id", id));
  },
  createOrder(data: any) {
    const url = "/orders";
    return axiosClient.post(url, { ...data });
  },
};

export default orderApi;
