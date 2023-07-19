import { omit } from "lodash";
import {
  CommentEntity,
  ListResponse,
  ProductEntity,
  RequestPayload,
} from "../models";
import axiosClient from "./axiosClient";
import { Storage } from "../utils/local";

const productApi = {
  getListProduct({
    filter,
    params,
  }: RequestPayload): Promise<ListResponse<ProductEntity>> {
    const url = "/products";
    let newFilter: any = Object.entries(filter || {}).reduce(
      (acc: Record<string, any>, item) => {
        if (
          item[1] !== "all" &&
          item[1] &&
          !(item[1] === 1000 && item[0] === "price")
        ) {
          acc[item[0]] = item[1];
        }
        return acc;
      },
      {}
    );

    if (newFilter.price) {
      newFilter.price = { lt: +newFilter.price };
    }

    if (newFilter.rating) {
      newFilter["rating.average"] = {
        lt: +newFilter.rating + 0.5,
        gt: +newFilter.rating - 0.5,
      };
    }

    if (newFilter.wine) {
      newFilter.wine = { $regex: ".*" + newFilter.wine + ".*", $options: "i" };
    }

    newFilter = omit(newFilter, "rating");

    return axiosClient.post(url, newFilter, { params });
  },
  getWine(id: string) {
    const url = "/products/:id";
    return axiosClient.get(url.replace(":id", id));
  },
  getCommentByIdWine(payload: RequestPayload) {
    const url = "/comments/query";
    return axiosClient.post(url, payload.filter || {}, {
      params: payload.params,
    });
  },
  createComment(payload: any): Promise<CommentEntity> {
    const url = "/comments/create";
    return axiosClient.post(url, payload, {
      headers: { Authorization: `Bearer ${Storage.getLocal("token")}` },
    });
  },
};

export default productApi;
