exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;

    const postTemplate = require.resolve(`./src/pages/posts/postTemplate.js`);

    return graphql(`
        {
            allMarkdownRemark(
                sort: { order: DESC, fields: [frontmatter___date] }
                limit: 1000
            ) {
                edges {
                    node {
                        frontmatter {
                            slug
                        }
                    }
                }
            }
        }
    `).then((result) => {
        if (result.errors) {
            return Promise.reject(result.errors);
        }

        return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
            createPage({
                path: node.frontmatter.slug,
                component: postTemplate,
                context: {
                    // additional data can be passed via context
                    slug: node.frontmatter.slug,
                },
            });
        });
    });
};
