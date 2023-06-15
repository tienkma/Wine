import { ListResponse, ProductEntity, RequestPayload } from "../models";
import axiosClient from "./axiosClient";

const homeApi = {
  getFeaturedProduct: (): Promise<ListResponse<ProductEntity>> => {
    const url = "/products";
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

export default homeApi;
