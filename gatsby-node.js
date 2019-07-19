const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // We can make more than 1 petition at the same time
  const { data } = await graphql(`
    {
      apps: allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)
  // Creates a new page for each app
  data.apps.edges.forEach(({ node }) => {
    const slug = node.frontmatter.title.replace(/\s/g, "-").toLowerCase()
    createPage({
      path: `/app/${slug}`,
      component: path.resolve("./src/templates/appTemplate.jsx"),
      context: {
        title: node.frontmatter.title,
      },
    })
  })
}
