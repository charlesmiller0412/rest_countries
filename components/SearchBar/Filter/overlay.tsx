import useCountryStore from "../../../appStore";
export const Overlay = ({ toggleFilter }: any) => {
    const setRegion = useCountryStore((state: any) => state.setRegion);

    return (
        <div className="searchBar__filter--selections z-10 absolute left-0 mt-[.4rem] rounded-[.5rem] text-base leading-lg h-[20vh] max-h-[16.4rem] bg-white dark:bg-darkBlue w-[20rem] shadow-[0_2px_9px_rgba(0,0,0,0.0532439)]">
            <ul className="w-full h-full flex flex-col justify-evenly pl-[2.4rem]">
                <li
                    onClick={() => {
                        setRegion("All");
                        toggleFilter();
                    }}
                    id="region"
                    className="hover:text-darkBlue dark:hover:text-darkGray  text-base leading-lg"
                >
                    All
                </li>
                <li
                    onClick={(e: any) => {
                        setRegion(e.target.innerText);
                        toggleFilter();
                    }}
                    value="Africa"
                    id="region"
                    className="hover:text-darkBlue dark:hover:text-darkGray text-base leading-lg"
                >
                    Africa
                </li>
                <li
                    onClick={(e: any) => {
                        setRegion(e.target.innerText);
                        toggleFilter();
                    }}
                    id="region"
                    className="hover:text-darkBlue dark:hover:text-darkGray  text-base leading-lg"
                >
                    Americas
                </li>
                <li
                    onClick={(e: any) => {
                        setRegion(e.target.innerText);
                        toggleFilter();
                    }}
                    id="region"
                    className="hover:text-darkBlue dark:hover:text-darkGray  text-base leading-lg"
                >
                    Asia
                </li>
                <li
                    onClick={(e: any) => {
                        setRegion(e.target.innerText);
                        toggleFilter();
                    }}
                    id="region"
                    className="hover:text-darkBlue dark:hover:text-darkGray  text-base leading-lg"
                >
                    Europe
                </li>
                <li
                    onClick={(e: any) => {
                        setRegion(e.target.innerText);
                        toggleFilter();
                    }}
                    id="region"
                    className="hover:text-darkBlue dark:hover:text-darkGray  text-base leading-lg"
                >
                    Oceania
                </li>
            </ul>
        </div>
    );
};
