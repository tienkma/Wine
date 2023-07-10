import { omit } from "lodash";
import { ListResponse, ProductEntity, RequestPayload } from "../models";
import axiosClient from "./axiosClient";

const productApi = {
  getListProduct({
    filter,
    params,
  }: RequestPayload): Promise<ListResponse<ProductEntity>> {
    const url = "/products";
    let newFilter: any = Object.entries(filter || {}).reduce((acc: Record<string, any>, item) => {
      if(item[1] !== 'all' && item[1] && !(item[1] === 1000 && item[0] === 'price')){
        acc[item[0]] = item[1];
      }
      return acc
    }, {})
  

    if(newFilter.price) {
      newFilter.price = {lt: +newFilter.price}  
    }

    if(newFilter.rating){
      newFilter['rating.avarage'] = newFilter.rating 
    }
    newFilter = omit(newFilter, "rating")

    return axiosClient.post(url, newFilter, { params });
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
