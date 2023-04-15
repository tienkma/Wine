import { typeItemWine } from "../types/homeTypes";

export const arrayFormList = (data: typeItemWine[]) => {
  const itemsPage = 24;
  const numberOfPages = Math.ceil(data.length / itemsPage);

  return Array.from({ length: numberOfPages }, (_, idx) => {
    const newIdx = idx * itemsPage;
    return data.slice(newIdx, newIdx + itemsPage);
  });
};
