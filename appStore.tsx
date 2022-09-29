import create from "zustand";

const useCountryStore = create((set) => ({
    search: "",
    updateSearch: (key: any) => set({ search: key }),
}));

export default useCountryStore;
