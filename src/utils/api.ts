import { data } from "./data";

export const getDataAPI: (limit?: number) => Promise<any> = (limit) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(limit ? data.slice(0, limit) : (data as Record<string, any>[]));
    }, 1000);
  });
};
