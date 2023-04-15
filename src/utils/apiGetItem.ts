import { data } from "./data";

export const getItem = (id: number | string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const findItem = data.find((item) => item.id == id);
      resolve(findItem);
    }, 1000);
  });
};
