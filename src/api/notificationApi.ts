import { ListResponse, ProductEntity, RequestPayload } from "../models";
import axiosClient from "./axiosClient";

const notificationApi = {
  getListNotification: (
    payload: RequestPayload
  ): Promise<ListResponse<ProductEntity>> => {
    const url = "/notification/query";
    return axiosClient.post(
      url,
      {},
      {
        params: payload.params,
      }
    );
  },
};

export default notificationApi;
