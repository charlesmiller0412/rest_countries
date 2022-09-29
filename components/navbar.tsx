import { Fragment } from "react";
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";

export default function Navbar() {
    const { theme, setTheme } = useTheme();

    return (
        <div className="navbar px-[8rem] py-[2.4rem] absolute left-0 w-screen flex justify-between top-0 shadow-[0_2px_4px_rgba(0,0,0,0.0562443)] bg-white dark:bg-darkBlue">
            <h1 className="text-[2.4rem] leading-auto font-extraBold ">
                Where in the world?
            </h1>
            <button
                className="text-[1.6rem] font-semiBold flex items-center"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
                {theme === "dark" ? (
                    <Fragment>
                        <FontAwesomeIcon
                            icon={faSun}
                            className={"text-[2rem] mr-[.8rem]"}
                            transform={{ rotate: 340 }}
                        />{" "}
                        {"Light Mode"}
                    </Fragment>
                ) : (
                    <Fragment>
                        <FontAwesomeIcon
                            icon={faMoon}
                            className={"text-[2rem] mr-[.8rem]"}
                            transform={{ rotate: 340 }}
                        />{" "}
                        {"Dark Mode"}
                    </Fragment>
                )}
            </button>
        </div>
    );
}
