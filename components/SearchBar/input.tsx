import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import useCountryStore from "../../appStore";

export const Input = () => {
    const searchInput = useCountryStore((state: any) => state.searchInput);
    const countries = useCountryStore((state: any) => state.countries);
    const setFiltered = useCountryStore((state: any) => state.setFiltered);
    const setSearchInput = useCountryStore(
        (state: any) => state.setSearchInput
    );

    const searchCountries = (searchValue: any) => {
        setSearchInput(searchValue);

        if (searchInput) {
            const filteredCountries = countries.filter((country: any) =>
                Object.values(country.name)
                    .join("")
                    .toLowerCase()
                    .includes(searchValue.toLowerCase())
            );
            setFiltered(filteredCountries);
        } else {
            setFiltered(countries);
        }
    };

    return (
        <div className="searchBar__search relative text-darkGray dark:text-white w-full md:w-[33vw] md:max-w-[48rem] h-[4.8rem] md:h-[5.6rem] shadow-[0_2px_9px_rgba(0,0,0,0.0532439)]">
            <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="absolute text-[1.8rem] top-1/2 -translate-y-1/2 left-[3.2rem]"
            />

            <input
                type="search"
                className="w-full h-full bg-white dark:bg-darkBlue pl-[7.4rem] pr-[5rem] rounded-[5px] text-sm md:text-base leading-lg"
                placeholder="Search for a country..."
                value={searchInput}
                onChange={(e) => searchCountries(e.target.value)}
            />
        </div>
    );
};
