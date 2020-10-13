const path = require("path");
const plugins = require("next-compose-plugins");
const images = require("next-images");
const reactSvg = require("next-react-svg");

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, "src/styles")],
    },
};

module.exports = plugins(
    [
        [images, { exclude: path.resolve(__dirname, "src/assets/svg") }],
        [reactSvg, { include: path.resolve(__dirname, "src/assets/svg") }],
    ],
    nextConfig
);
