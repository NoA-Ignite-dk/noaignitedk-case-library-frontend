import Favicon from "assets/images/favicon.png";

const title = "Next HGW App";
const description = "The easiest and fastest way to create new projects.";

export const helmet = {
    title,
    titleTemplate: "%s - HGW",
    htmlAttributes: { lang: "en" },
    meta: [
        { name: "description", content: description },
        {
            name: "viewport",
            content: "width=device-width, initial-scale=1, user-scalable=no",
        },
        { name: "apple-mobile-web-app-status-bar-style", content: "black" },
        { name: "msapplication-navbutton-color", content: "#000" },
        { name: "msapplication-TileColor", content: "#000" },
        { name: "theme-color", content: "#000" },

        { property: "og:title", content: title },
        { property: "og:image", content: "" },
        { property: "og:image:width", content: "880px" },
        { property: "og:image:height", content: "440px" },
        { property: "og:image:alt", content: description },

        { name: "twitter:title", content: title },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: "" },
        { name: "twitter:site", content: "@hellogreatworks" },
        { name: "twitter:creator", content: "@hellogreatworks" },
        { name: "twitter:description", content: description },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: Favicon }],
};
