export const Storage = {
  getLocal: (name: string) => {
    try {
      const data = localStorage.getItem(name);
      return JSON.parse(data || "");
    } catch (error) {
      console.log("error local storage", error);
    }
  },
  setLocal: (name: string, value: any) => {
    try {
      const data = localStorage.setItem(name, JSON.stringify(value));
    } catch (error) {
      console.log("error local storage", error);
    }
  },
};
