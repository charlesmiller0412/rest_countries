import { useEffect, useState } from "react";
import useCountryStore from "../../../appStore";

export const Overlay = () => {
    const [region, setRegion] = useState("");
    const updateCountries = useCountryStore(
        (state: any) => state.updateCountries
    );

    const fetchRegion = async (event: any) => {
        try {
            setRegion(event.target.innerText);
            const response = await fetch(
                `https://restcountries.com/v2/regionalbloc/${region}`
            );
            const json = await response.json();
            updateCountries(json);
            return;
        } catch (err: any) {
            console.error(err.message);
        }
    };

    document.addEventListener("click", (event) => {
        if (document.getElementsByTagName("li") == this) {
            fetchRegion;
        }
    });

    return (
        <div className="searchBar__filter--selections z-10 absolute left-0 mt-[.4rem] rounded-[.5rem] text-base leading-lg h-[15vh] max-h-[16.4rem] bg-white dark:bg-darkBlue w-[20rem] shadow-[0_2px_9px_rgba(0,0,0,0.0532439)]">
            <ul className="w-full h-full flex flex-col justify-evenly pl-[2.4rem]">
                <li
                    value="africa"
                    className="hover:text-darkBlue dark:hover:text-darkGray text-base leading-lg"
                    onClick={fetchRegion}
                >
                    Africa
                </li>
                <li className="hover:text-darkBlue dark:hover:text-darkGray  text-base leading-lg">
                    America
                </li>
                <li className="hover:text-darkBlue dark:hover:text-darkGray  text-base leading-lg">
                    Asia
                </li>
                <li className="hover:text-darkBlue dark:hover:text-darkGray  text-base leading-lg">
                    Europe
                </li>
                <li className="hover:text-darkBlue dark:hover:text-darkGray  text-base leading-lg">
                    Oceania
                </li>
            </ul>
        </div>
    );
};
