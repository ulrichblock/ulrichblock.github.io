import { GatsbyCreatePages } from '../types'
import _ from 'lodash'
import path from 'path'

export const createPages: GatsbyCreatePages = async ({
  graphql,
  boundActionCreators: { createPage }
}): Promise<void> => {
  const result = await graphql(`
    query CreatePagesQuery {
      allMarkdownRemark(filter: { frontmatter: { published: { eq: true } } }) {
        edges {
          node {
            frontmatter {
              tags
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.

  const posts = result.data.allMarkdownRemark.edges
  posts.forEach(({ node }): void => {
    createPage({
      component: path.resolve('./src/templates/blog-post.tsx'),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug
      },
      path: node.fields.slug
    })
  })

  // Tag pages:
  let tags = []

  // Iterate through each post, putting all found tags into `tags`
  _.each(posts, (edge): void => {
    if (_.get(edge, 'node.frontmatter.tags')) {
      tags = tags.concat(edge.node.frontmatter.tags)
    }
  })

  // Eliminate duplicate tags
  tags = _.uniq(tags)

  // Make tag pages
  tags.forEach((tag): void => {
    createPage({
      component: path.resolve('src/templates/tag.tsx'),
      context: {
        tag
      },
      path: `/tags/${_.kebabCase(tag)}/`
    })
  })

  const postsPerPage = 10
  const numPages = Math.ceil(posts.length / postsPerPage)

  Array.from({ length: numPages }).forEach((_unused, i): void => {
    createPage({
      component: path.resolve('./src/templates/post-list.tsx'),
      context: {
        currentPage: i + 1,
        limit: postsPerPage,
        numPages,
        skip: i * postsPerPage
      },
      path: i === 0 ? '/' : `/${i + 1}`
    })
  })
}

/**
 * Organize with year/month/title/index.md but keep the old URL slugs.
 */
export function removeDateFromSlug(slug: string): string {
  return slug.replace(/^\/\d{4}\/\d{2}/, '')
}
