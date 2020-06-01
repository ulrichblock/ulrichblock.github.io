const { createFilePath } = require(`gatsby-source-filesystem`)
require('source-map-support').install()
require('ts-node').register()
const { createPages, removeDateFromSlug } = require('./src/lib/createPages')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = removeDateFromSlug(createFilePath({ node, getNode, basePath: `content/blog/` }))

    createNodeField({
      node,
      name: `slug`,
      value: slug
    })
  }
}

exports.createPages = createPages
