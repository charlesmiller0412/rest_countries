import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar";
import SearchBar from "../components/SearchBar/searchBar";

const Home: NextPage = () => {
    return (
        <div className={""}>
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
                    "w-screen h-screen flex justify-evenly py-[8rem] px-[1.6rem] md:p-[8rem] bg-lightGray dark:bg-veryDarkBlueD transition-all text-veryDarkBlueL dark:text-white"
                }
            >
                <Navbar />
                <SearchBar />
            </main>

            <footer className={""}></footer>
        </div>
    );
};

export default Home;
