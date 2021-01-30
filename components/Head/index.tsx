import Head from "next/head";
import React from "react";

const SiteHead = () => {
    return (
        <Head>
            <title>Felix Yeung</title>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <meta name="theme-color" content="#000000" />
            <title>Felix Yeung</title>
            <link
                rel="shortcut icon"
                href="/assets/images/im.feli.page-full.png"
                type="image/x-icon"
            />
            <meta name="Description" content="Felix's Portfolio Website" />

            <meta property="og:title" content="Felix Yeung" />
            <meta
                property="og:description"
                content="Felix's Portfolio Website"
            />
            <meta
                property="og:image"
                content="https://felixyeung.dev/assets/images/im.feli.page.png"
            />
            <meta property="og:url" content="https://felixyeung.dev/" />
            <meta property="og:site_name" content="Felix Yeung" />
            <meta name="twitter:title" content="Felix Yeung" />
            <meta
                name="twitter:description"
                content=" Felix's Portfolio Website"
            />
            <meta
                name="twitter:image"
                content="https://felixyeung.dev/assets/images/im.feli.page.png"
            />
            <meta
                name="twitter:card"
                content="https://felixyeung.dev/assets/images/im.feli.page.png"
            />
            <meta name="twitter:image:alt" content="Felix's Icon" />
        </Head>
    );
};

export default SiteHead;
