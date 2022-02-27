/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
    siteMetadata: {
        title: `new`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        "gatsby-plugin-sass",
        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "markdown-pages",
                path: `${__dirname}/src/markdown-pages`,
            },
            __key: "markdown-pages",
        },
        "gatsby-transformer-remark",
    ],
};
