import { data } from "./data";

export const getDataAPI = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data as Record<string, any>[]);
    }, 1000);
  });
};
