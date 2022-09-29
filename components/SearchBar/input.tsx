import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import useCountryStore from "../../appStore";

export const Input = () => {
    const search = useCountryStore((state: any) => state.search);
    const updateSearch = useCountryStore((state: any) => state.updateSearch);

    const handleChange = (e: { target: { value: string } }) => {
        updateSearch(e?.target.value);
        console.log(search);
    };
    return (
        <div className="searchBar__search relative text-darkGray dark:text-white w-full md:w-[33vw] md:max-w-[48rem] h-[7vh] max-h-[5.6rem] shadow-[0_2px_9px_rgba(0,0,0,0.0532439)]">
            <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="absolute text-[1.8rem] top-1/2 -translate-y-1/2 left-[3.2rem]"
            />

            <input
                type="text"
                className="w-full h-full bg-white dark:bg-darkBlue px-[7.4rem] rounded-[5px] text-sm md:text-base leading-lg"
                placeholder="Search for a country..."
                value={search}
                onChange={handleChange}
            />
        </div>
    );
};
