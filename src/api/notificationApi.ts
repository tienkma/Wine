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
        params: {
          page: 1,
          limit: 10,
        },
      }
    );
  },
};

export default notificationApi;
