import { useEffect, useState } from "react";
import Image from "next/image";
import SearchBar from "../SearchBar/searchBar";
const axios = require("axios");

export const Viewport = () => {
    const [countries, setCountries] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchCountries = async () => {
        try {
            const response = await fetch("https://restcountries.com/v2/all");
            const json = await response.json();
            setCountries(json);
            setIsLoading(false);
            console.log(countries);
            return;
        } catch (err: any) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        fetchCountries();
    }, []);

    return (
        <div className="viewport w-full h-5/6 bg-red-600 mt-[4.8rem] flex flex-wrap md:justify-between gap-x-[7.45rem] gap-y-[7.5rem] justify-center">
            {countries.map(({ name, capital, region, population, flag }) => (
                <div
                    key={name}
                    className="card w-[26.4rem] h-[33.6rem] overflow-hidden rounded-lg bg-white dark:bg-darkBlue shadow-[0_0_7px_2px_rgba(0,0,0,0.0294384)]"
                >
                    <div className="card__top h-[16rem] bg-[#325678] grid place-items-center relative">
                        <Image
                            src={`${flag}`}
                            layout="fill"
                            alt="flag"
                            objectFit="cover"
                        />
                    </div>
                    <div className="card__bottom p-[2.4rem] text-veryDarkBlueL dark:text-white">
                        <div className="card__bottom--title">
                            <h3 className="text-lg font-extraBold leading-[2.6rem] mb-[1.6rem]">
                                {name}
                            </h3>
                        </div>
                        <div className="card__bottom--info flex flex-col justify-between">
                            <div className="card__bottom--info-detail text-base font-light leading-lg">
                                <span className="font-semiBold text-base leading-base mr-2">
                                    Population:
                                </span>
                                {population}
                            </div>
                            <div className="card__bottom--info-detail text-base font-light leading-lg my-[.8rem]">
                                <span className="font-semiBold text-base leading-base mr-2">
                                    Region:
                                </span>
                                {region}
                            </div>
                            <div className="card__bottom--info-detail text-base font-light leading-lg">
                                <span className="font-semiBold text-base leading-base mr-2">
                                    Capital:
                                </span>
                                {capital}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
