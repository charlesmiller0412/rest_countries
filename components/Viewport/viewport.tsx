import Countries from "./countries";
import CountryDetails from "./countryDetails";

export const Viewport = () => {
    return (
        <div className="viewport transition-all w-full h-2/3 md:h-full flex flex-wrap md:justify-between gap-x-[7.45rem] gap-y-[4rem] md:gap-y-[7.5rem] justify-center">
            <Countries />
        </div>
    );
};
