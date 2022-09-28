import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

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

            <main className={""}>
                <h1 className={""}>
                    Welcome to <a href="https://nextjs.org">Next.js!</a>
                </h1>
            </main>

            <footer className={""}></footer>
        </div>
    );
};

export default Home;
