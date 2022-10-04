import create from "zustand";

const useCountryStore = create((set) => ({
    showFilter: false,
    updateShowFilter: (key: any) => ({ showFilter: key }),

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
}));

export default useCountryStore;
