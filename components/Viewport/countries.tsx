import { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import useCountryStore from "../../appStore";
import SearchResults from "./searchResults";

export default function All() {
    const region = useCountryStore((state: any) => state.region);

    const countries = useCountryStore((state: any) => state.countries);
    const updateCountries = useCountryStore(
        (state: any) => state.updateCountries
    );
    const updateActiveCountry = useCountryStore(
        (state: any) => state.updateActiveCountry
    );
    const searchInput = useCountryStore((state: any) => state.searchInput);
    let imageSize: any;
    const router = useRouter();

    imageSize = {
        position: "relative",
    };

    const fetchActiveCountry = async (key: any) => {
        try {
            const res = await fetch(
                `https://restcountries.com/v2/name/${key}`,
                {
                    method: "GET",
                    cache: "no-cache",
                }
            );
            const json = await res.json();
            updateActiveCountry(json);
            router.push("/details");
        } catch (err: any) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        const fetchCountries = async () => {
            if (
                region == "Africa" ||
                region == "Americas" ||
                region == "Asia" ||
                region == "Europe" ||
                region == "Oceania"
            ) {
                try {
                    const res = await fetch(
                        `https://restcountries.com/v2/region/${region}`,
                        {
                            method: "GET",
                            cache: "no-cache",
                        }
                    );
                    const json = await res.json();
                    updateCountries(json);
                } catch (err: any) {
                    console.error(err.message);
                }
            } else {
                try {
                    const res = await fetch("https://restcountries.com/v2/all");
                    const json = await res.json();
                    updateCountries(json);
                } catch (err: any) {
                    console.error(err.message);
                }
            }
        };

        fetchCountries();
    }, [region]);

    return (
        <div className="viewport transition-all w-full h-2/3 md:h-full flex flex-wrap md:justify-between gap-x-[7.45rem] gap-y-[4rem] md:gap-y-[5rem] justify-center">
            {searchInput.length > 0 ? (
                <SearchResults fetchActiveCountry={fetchActiveCountry} />
            ) : (
                countries.map((country: any) => (
                    <div
                        key={country.name}
                        className="card w-[26.4rem] h-[33.6rem] overflow-hidden rounded-lg bg-white dark:bg-darkBlue shadow-[0_0_7px_2px_rgba(0,0,0,0.0294384)] cursor-pointer"
                        onClick={() => fetchActiveCountry(country.name)}
                    >
                        <div className="card__top h-[16rem] bg-[#325678] grid place-items-center w-full relative">
                            <Image
                                src={country.flag}
                                layout="fill"
                                alt="flag"
                                objectFit="cover"
                            />
                        </div>
                        <div className="card__bottom p-[2.4rem] text-veryDarkBlueL dark:text-white">
                            <div className="card__bottom--title">
                                <h3
                                    className="text-lg font-extraBold leading-[2.6rem] mb-[1.6rem]"
                                    id={country.name}
                                >
                                    {country.name}
                                </h3>
                            </div>
                            <div className="card__bottom--info flex flex-col justify-between">
                                <div className="card__bottom--info-detail text-base font-light leading-lg">
                                    <span className="font-semiBold text-base leading-base mr-2">
                                        Population:
                                    </span>
                                    {country.population.toLocaleString()}
                                </div>
                                <div className="card__bottom--info-detail text-base font-light leading-lg my-[.8rem]">
                                    <span className="font-semiBold text-base leading-base mr-2">
                                        Region:
                                    </span>
                                    {country.region}
                                </div>
                                <div className="card__bottom--info-detail text-base font-light leading-lg">
                                    <span className="font-semiBold text-base leading-base mr-2">
                                        Capital:
                                    </span>
                                    {country.capital}
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}
