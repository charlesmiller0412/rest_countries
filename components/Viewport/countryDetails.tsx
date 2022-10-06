import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import useCountryStore from "../../appStore";
import { v4 as uuidv4 } from "uuid";

export default function CountryDetails() {
    // state management
    const countries = useCountryStore((state: any) => state.countries);
    const setIsLoading = useCountryStore((state: any) => state.setIsLoading);
    const router = useRouter();
    const activeCountry = useCountryStore((state: any) => state.activeCountry);
    const updateActiveCountry = useCountryStore(
        (state: any) => state.updateActiveCountry
    );

    function handleClick() {
        setIsLoading(false);
        router.push("/");
    }
    let index: any = [];

    function getIndex(border: any) {
        index = [];
        index = countries
            .map((country: any) => country.alpha3Code)
            .indexOf(border);
        return countries[index].name;
    }

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
        } catch (err: any) {
            console.error(err.message);
        }
    };

    return (
        <div className="countryDetails w-full h-full lg:mt-[8rem] flex flex-col px-[2.8rem] lg:px-0">
            <button
                className="countryDetails__back flex items-center text-[1.6rem] font-light leading-lg text-veryDarkBlueL dark:text-white dark:bg-darkBlue px-[3rem] py-[1rem] rounded-[.5rem] w-fit capitalize mb-[6.4rem] "
                onClick={() => handleClick()}
            >
                <div className="text-[2rem] mr-[1rem] h-full grid place-items-center">
                    <FontAwesomeIcon icon={faArrowLeftLong} />
                </div>
                back
            </button>
            <div className="countryDetails__details flex flex-col items-center lg:flex lg:flex-row justify-between pb-[6.2rem] lg:pb-0 max-w-fit m-auto">
                <div className="countryDetails__details--flag mb-[4rem] lg:mb-0 w-full justify-center flex lg:justify-start lg:mr-[5rem]">
                    <div className="countryDetails__details--flag-image relative w-full h-[25vh] max-h-[22.9rem] lg:w-[49vw] lg:max-w-[56rem] lg:h-[42.5vh] lg:max-h-[40rem] rounded-[.5rem] overflow-hidden">
                        <Image
                            src={activeCountry[0].flag}
                            layout="fill"
                            alt="flag"
                            objectFit="cover"
                        />
                    </div>
                </div>
                <div className="countryDetails__details--info whitespace-nowrap flex flex-col justify-between w-full">
                    <h2 className="text-mobileLg leading-xl lg:leading-auto lg:text-xl font-extraBold mb-[1.6rem]">
                        {activeCountry[0].name}
                    </h2>
                    <div className="countryDetails__details--info-stats lg:flex lg:justify-between">
                        <ul className="countryDetails__details--info-stats-left list-none md:mr-[5vw] xl:mr-[10vw]">
                            <li className="capitalize font-light text-md leading-xl lg:text-[1.1vw] xl:text-md">
                                <span className="font-semiBold text-md lg:text-[1.1vw] xl:text-md">
                                    native name:{" "}
                                </span>
                                {activeCountry[0].nativeName}
                            </li>
                            <li className="capitalize font-light text-md leading-xl lg:text-[1.1vw] xl:text-md">
                                <span className="font-semiBold text-md lg:text-[1.1vw] xl:text-md">
                                    population:{" "}
                                </span>
                                {activeCountry[0].population.toLocaleString()}
                            </li>
                            <li className="capitalize font-light text-md leading-xl lg:text-[1.1vw] xl:text-md">
                                <span className="font-semiBold text-md lg:text-[1.1vw] xl:text-md">
                                    region:{" "}
                                </span>
                                {activeCountry[0].region}
                            </li>
                            <li className="capitalize font-light text-md leading-xl lg:text-[1.1vw] xl:text-md">
                                <span className="font-semiBold text-md lg:text-[1.1vw] xl:text-md">
                                    sub region:{" "}
                                </span>

                                {activeCountry[0].subregion}
                            </li>
                            <li className="capitalize font-light text-md leading-xl lg:text-[1.1vw] xl:text-md">
                                <span className="font-semiBold text-md lg:text-[1.1vw] xl:text-md">
                                    capital:{" "}
                                </span>
                                {activeCountry[0].capital}
                            </li>
                        </ul>
                        <ul className="countryDetails__details--info-stats-right list-none my-[3.4rem] lg:my-0">
                            <li className="capitalize font-light text-md leading-xl lg:text-[1.1vw] xl:text-md">
                                <span className="font-semiBold text-md lg:text-[1.1vw] xl:text-md">
                                    top level domain:{" "}
                                </span>
                                {activeCountry[0].topLevelDomain}
                            </li>
                            <li className="capitalize font-light text-md leading-xl lg:text-[1.1vw] xl:text-md">
                                <span className="font-semiBold text-md lg:text-[1.1vw] xl:text-md">
                                    currencies:{" "}
                                </span>
                                {activeCountry[0].currencies ? (
                                    activeCountry[0].currencies.map(
                                        (currency: any) => (
                                            <span
                                                key={uuidv4()}
                                                className="capitalize font-light text-md leading-xl lg:text-[1.1vw] xl:text-md"
                                            >
                                                {currency.name}
                                            </span>
                                        )
                                    )
                                ) : (
                                    <span
                                        key={uuidv4()}
                                        className="capitalize font-light text-md leading-xl lg:text-[1.1vw] xl:text-md"
                                    >
                                        none
                                    </span>
                                )}
                            </li>
                            <li className="capitalize font-light text-md leading-xl lg:text-[1.1vw] xl:text-md whitespace-normal">
                                <span className="font-semiBold text-md lg:text-[1.1vw] xl:text-md">
                                    languages:{" "}
                                </span>
                                {activeCountry[0].languages.length >= 1 ? (
                                    activeCountry[0].languages.map(
                                        (language: any) => (
                                            <span
                                                id="language"
                                                key={uuidv4()}
                                                className="capitalize font-light text-md lg:text-[1.1vw] leading-xl xl:text-md"
                                            >
                                                {language.name}
                                            </span>
                                        )
                                    )
                                ) : (
                                    <span
                                        id="language"
                                        key={uuidv4()}
                                        className="capitalize font-light text-md lg:text-[1.1vw] leading-xl xl:text-md"
                                    >
                                        {activeCountry.name}
                                    </span>
                                )}
                            </li>
                        </ul>
                    </div>
                    <div className="countryDetails__details--info-border lg:flex lg:items-center mt-0 lg:mt-[6rem]">
                        <h3 className="text-md xl:text-md font-semiBold leading-[2.4rem] w-1/4 lg:text-[1.1vw] lg:mr-3 mb-[1.6rem] lg:mb-0">
                            Border Countries:
                        </h3>
                        <ul className="w-full lg:w-full grid grid-cols-2 xl:grid-cols-4 justify-between lg:justify-start gap-5">
                            {activeCountry[0].borders ? (
                                activeCountry[0].borders.map((border: any) => (
                                    <li
                                        onClick={() => {
                                            fetchActiveCountry(
                                                getIndex(border)
                                            );
                                        }}
                                        key={uuidv4()}
                                        className="w-{10vw} whitespace-normal cursor-pointer font-light lg:text-[1.1vw] text-base xl:text-base leading-auto py-[.5rem] text-center shadow-[0_0_4px_1px_rgba(0,0,0,0.104931)] dark:shadow-0 dark:bg-darkBlue hover:text-darkGray grid place-items-center"
                                    >
                                        {/* {border} */}
                                        {index.length > 0
                                            ? ""
                                            : getIndex(border)}
                                    </li>
                                ))
                            ) : (
                                <a
                                    key={uuidv4()}
                                    className="w-[3.5vw] font-light lg:text-[1.1vw] text-base xl:text-base leading-auto py-[.5rem] text-center shadow-[0_0_4px_1px_rgba(0,0,0,0.104931)] dark:shadow-0 dark:bg-darkBlue"
                                >
                                    None
                                </a>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
