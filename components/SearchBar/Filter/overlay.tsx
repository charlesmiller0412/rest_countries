export const Overlay = () => {
    return (
        <div className="searchBar__filter--selections z-10 absolute left-0 mt-[.4rem] rounded-[.5rem] text-base leading-lg h-[15vh] max-h-[16.4rem] bg-white dark:bg-darkBlue w-[20rem] shadow-[0_2px_9px_rgba(0,0,0,0.0532439)]">
            <ul className="w-full h-full flex flex-col justify-evenly pl-[2.4rem]">
                <li className="hover:text-darkBlue dark:hover:text-darkGray text-base leading-lg">
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
