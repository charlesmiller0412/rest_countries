import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import useCountryStore from "../../appStore";

export default function CountryDetails() {
    const router = useRouter();
    const countries = useCountryStore((state: any) => state.countries);
    const activeCountry = useCountryStore((state: any) => state.activeCountry);

    return (
        <div className="countryDetails w-full h-full lg:mt-[8rem] flex flex-col px-[2.8rem] lg:px-0">
            <button
                className="countryDetails__back flex items-center text-[1.6rem] font-light leading-lg text-veryDarkBlueL dark:text-white dark:bg-darkBlue px-[3rem] py-[1rem] rounded-[.5rem] w-fit capitalize mb-[6.4rem] md:mb-[8rem]"
                onClick={() => router.push("/")}
            >
                <div className="text-[2rem] mr-[1rem] h-full grid place-items-center">
                    <FontAwesomeIcon icon={faArrowLeftLong} />
                </div>
                back
            </button>
            <div className="countryDetails__details flex flex-col items-center lg:flex lg:flex-row justify-between pb-[6.2rem] lg:pb-0">
                <div className="countryDetails__details--flag mb-[4rem] lg:mb-0 w-full justify-center flex lg:justify-start lg:mr-[5rem]">
                    <div className="countryDetails__details--flag-image overflow-hidden relative w-full h-[25vh] max-h-[22.9rem] lg:w-[49vw] lg:max-w-[56rem] lg:h-[42.5vh] lg:max-h-[40rem] rounded-[.5rem]">
                        <Image
                            src={activeCountry[0].flag}
                            layout="fill"
                            alt="flag"
                            objectFit="contain"
                        />
                    </div>
                </div>
                <div className="countryDetails__details--info whitespace-nowrap flex flex-col justify-between">
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
                                {activeCountry[0].currencies.length >= 1 ? (
                                    activeCountry[0].currencies.map(
                                        (currency: any) => (
                                            <span
                                                key={activeCountry[0].name}
                                                className="capitalize font-light text-md leading-xl lg:text-[1.1vw] xl:text-md"
                                            >
                                                {currency.name}
                                            </span>
                                        )
                                    )
                                ) : (
                                    <span
                                        key={activeCountry[0].name}
                                        className="capitalize font-light text-md leading-xl lg:text-[1.1vw] xl:text-md"
                                    >
                                        {activeCountry[0].currencies.name}
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
                                                key={activeCountry[0].name}
                                                className="capitalize font-light text-md lg:text-[1.1vw] leading-xl xl:text-md"
                                            >
                                                {language.name}
                                            </span>
                                        )
                                    )
                                ) : (
                                    <span
                                        id="language"
                                        key={activeCountry[0].name}
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
                        <ul className="w-full lg:w-2/3 grid grid-cols-3 xl:grid-cols-4 justify-between lg:justify-start gap-5">
                            {activeCountry[0].borders ? (
                                activeCountry[0].borders.map((border: any) => (
                                    <li
                                        key={activeCountry[0].name}
                                        className="w-[7vw] min-w-[9.6rem] font-light lg:text-[1.1vw] text-base xl:text-base leading-auto py-[.5rem] text-center shadow-[0_0_4px_1px_rgba(0,0,0,0.104931)] dark:shadow-0 dark:bg-darkBlue"
                                    >
                                        {border}
                                    </li>
                                ))
                            ) : (
                                <li
                                    key={activeCountry[0].name}
                                    className="w-[7vw] min-w-[9.6rem] font-light lg:text-[1.1vw] text-base xl:text-base leading-auto py-[.5rem] text-center shadow-[0_0_4px_1px_rgba(0,0,0,0.104931)] dark:shadow-0 dark:bg-darkBlue"
                                >
                                    None
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
