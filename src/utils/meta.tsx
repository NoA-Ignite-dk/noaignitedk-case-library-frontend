import Head from "next/head";

const title = "Next HGW App";
const description = "The easiest and fastest way to create new projects.";

const meta = {
    url: "https://hellogreatworks.com",
    title,
    description,
    image: {
        url: "./images/meta-image.png",
        width: "1200",
        height: "628",
    },
};

export const MetaTags = () => (
    <Head>
        <title>{`${meta.title} | HGW`}</title>
        {meta.description && (
            <>
                <meta name="description" content={meta.description} />
                <meta property="og:description" content={meta.description} />
                <meta
                    property="twitter:description"
                    content={meta.description}
                />
            </>
        )}

        {meta?.url && (
            <>
                <meta property="og:url" content={meta.url} />
                <meta property="twitter:url" content={meta.url} />
            </>
        )}

        {meta.image.url && (
            <>
                <meta property="og:image" content={meta.image.url} />
                <meta property="twitter:image" content={meta.image.url} />
            </>
        )}

        {meta.image.width && (
            <meta property="og:image:width" content={meta.image.width} />
        )}
        {meta.image.height && (
            <meta property="og:image:height" content={meta.image.height} />
        )}
    </Head>
);
