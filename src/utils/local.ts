export const Storage = {
  getLocal: (name: string) => {
    try {
      const data = localStorage.getItem(name);
      return JSON.parse(data || JSON.stringify(""));
    } catch (error) {
      console.log("error local storage", error);
    }
  },
  setLocal: (name: string, value: any) => {
    try {
      localStorage.setItem(name, value);
    } catch (error) {
      console.log("error local storage", error);
    }
  },
};
