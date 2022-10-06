import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/navbar";
import SearchBar from "../components/SearchBar/searchBar";
import dynamic from "next/dynamic";

const Home: NextPage = () => {
    const Countries = dynamic(
        () => import("../components/Viewport/countries"),
        {
            ssr: false,
        }
    );
    const Navbar = dynamic(() => import("../components/navbar"), {
        ssr: false,
    });

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta name="author" content="Charles Miller" />
                <meta
                    name="description"
                    content="REST Country App challenge from frontendmentor.com"
                />
                <meta property="og:image" content="/assets/favicon/logo.png" />
                <meta
                    property="og:description"
                    content="REST Country App challenge from frontendmentor.com"
                />
                <meta
                    property="og:title"
                    content="Charles Miller | Web Developer, UX/UI Designer, &amp; Software Engineer"
                />
                <title>Charles Miller | REST Country App</title>
                <link rel="icon" href="/public/favicon.ico" />
            </Head>

            <main
                className={
                    "relative w-full h-screen flex flex-col py-[10.4rem] px-[1.6rem] md:p-[8rem] bg-lightGray dark:bg-veryDarkBlueD transition-all text-veryDarkBlueL dark:text-white overflow-x-hidden"
                }
            >
                <Navbar />
                <SearchBar />
                <Countries />
            </main>

            <footer className={""}></footer>
        </>
    );
};

export default Home;
