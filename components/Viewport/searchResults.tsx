import Image from "next/image";
import useCountryStore from "../../appStore";

export default function SearchResults({ fetchActiveCountry }: any) {
    const filtered = useCountryStore((state: any) => state.filteredCountries);
    let imageSize: any;
    imageSize = {
        position: "relative",
    };

    return (
        <>
            {filtered.map((country: any) => (
                <div
                    key={country.name}
                    className="card w-[26.4rem] h-[33.6rem] overflow-hidden rounded-lg bg-white dark:bg-darkBlue shadow-[0_0_7px_2px_rgba(0,0,0,0.0294384)] cursor-pointer"
                    onClick={() => {
                        fetchActiveCountry(country.name);
                    }}
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
            ))}
        </>
    );
}
