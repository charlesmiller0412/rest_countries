import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { CssBaseline } from "@nextui-org/react";

class MyDocument extends Document {
    static async getInitialProps(ctx: any) {
        const initialProps = await Document.getInitialProps(ctx);
        return {
            ...initialProps,
            styles: React.Children.toArray([initialProps.styles]),
        };
    }

    render() {
        return (
            <Html lang="en-us">
                <Head>
                    {CssBaseline.flush()}
                    {/* FAVICON */}
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="%PUBLIC_URL%/assets/favicon/apple-touch-icon.png"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
