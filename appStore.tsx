import create from "zustand";

const useCountryStore = create((set) => ({
    // All countries state
    countries: [],
    updateCountries: (key: any) => set({ countries: key }),

    // Country details states
    activeCountry: "",
    updateActiveCountry: (key: any) => set({ activeCountry: key }),
    activeCountryData: [],
    updateActiveCountryData: (key: any) => set({ activeCountry: key }),

    // Search states
    searchInput: "",
    setSearchInput: (key: any) => set({ searchInput: key }),
    searchValue: "",
    setSearchValue: (key: any) => set({ searchValue: key }),
    filtered: [],
    setFiltered: (key: any) => set({ filteredCountries: key }),

    // region
    region: "",
    setRegion: (key: any) => set({ region: key }),
}));

export default useCountryStore;
