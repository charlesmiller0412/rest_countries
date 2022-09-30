import create from "zustand";

const useCountryStore = create((set) => ({
    search: "",
    updateSearch: (key: any) => set({ search: key }),
    countries: "",
    updateCountries: (key: any) => set({ countries: key }),
}));

export default useCountryStore;
