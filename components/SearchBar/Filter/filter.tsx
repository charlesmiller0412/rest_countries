import { useState, useEffect } from "react";
import { Overlay } from "./overlay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import useCountryStore from "../../../appStore";

export const Filter = () => {
    const region = useCountryStore((state: any) => state.region);
    const setIsLoading = useCountryStore((state: any) => state.setIsLoading);

    const [showFilters, setShowFilters] = useState(false);

    function toggleFilter() {
        setIsLoading(true);
        setShowFilters(!showFilters);
    }

    return (
        <div className="searchBar__filter relative cursor-pointer select-none self-start">
            <div
                className="searchBar__filter--bar bg-white dark:bg-darkBlue w-[20rem] h-[4.8rem] md:h-[5.6rem] flex items-center justify-between rounded-[.5rem] px-[2.4rem] text-darkGray dark:text-white text-sm md:text-base leading-lg shadow-[0_2px_9px_rgba(0,0,0,0.0532439)] hover:text-darkBlue dark:hover:text-darkGray whitespace-nowrap min-w-fit"
                onClick={toggleFilter}
            >
                <h2>
                    {region == "" || region == "All"
                        ? "Filter by Region"
                        : region}
                </h2>
                <FontAwesomeIcon
                    icon={faChevronDown}
                    className="text-[.9rem]"
                />
            </div>
            {showFilters ? <Overlay toggleFilter={toggleFilter} /> : ""}
        </div>
    );
};
