import { Fragment } from "react";
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon as solidFaMoon } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { useRouter } from "next/router";

export default function Navbar() {
    const router = useRouter();
    const { theme, setTheme } = useTheme();

    return (
        <nav className="navbar z-20 px-[1.6rem] py-[3rem] md:px-[8rem] md:py-[2.4rem] absolute left-0 w-full flex justify-between top-0 shadow-[0_2px_4px_rgba(0,0,0,0.0562443)] bg-white dark:bg-darkBlue">
            <a onClick={() => router.push("/")}>
                <h1 className="cursor-pointer text-base md:text-[2.4rem] leading-[2rem] md:leading-auto font-extraBold text-veryDarkBlueL dark:text-white">
                    Where in the world?
                </h1>
            </a>
            <button
                className="text-[1.2rem] md:text-[1.6rem] font-semiBold flex items-center"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
                {theme === "dark" ? (
                    <Fragment>
                        <FontAwesomeIcon
                            icon={solidFaMoon}
                            className={
                                "text-[1.6rem] md:text-[2rem] mr-[.8rem]"
                            }
                            transform={{ rotate: 340 }}
                        />{" "}
                        {"Dark Mode"}
                    </Fragment>
                ) : (
                    <Fragment>
                        <FontAwesomeIcon
                            icon={faMoon}
                            className="text-[1.6rem] md:text-[2rem] mr-[.8rem]"
                            transform={{ rotate: 340 }}
                        />{" "}
                        {"Dark Mode"}
                    </Fragment>
                )}
            </button>
        </nav>
    );
}
