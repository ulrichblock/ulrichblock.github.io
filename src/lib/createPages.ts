import { GatsbyCreatePages } from '../types'
import { kebabCase } from './utils'
import path from 'path'

export const createPages: GatsbyCreatePages = async ({ graphql, actions: { createPage } }): Promise<void> => {
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

  // Tag pages:
  const tags = new Set<string>()

  for (const edge of result.data.allMarkdownRemark.edges) {
    createPage({
      component: path.resolve('./src/templates/blog-post.tsx'),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: edge.node.fields.slug
      },
      path: edge.node.fields.slug
    })

    for (const tag of edge.node.frontmatter.tags || []) {
      tags.add(tag)
    }
  }

  // Make tag pages
  for (const tag of tags) {
    createPage({
      component: path.resolve('src/templates/tag.tsx'),
      context: {
        tag
      },
      path: `/tags/${kebabCase(tag)}/`
    })
  }

  const postsPerPage = 10
  const numPages = Math.ceil(result.data.allMarkdownRemark.edges.length / postsPerPage)

  for (let i = 0; i < numPages; i++) {
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
  }
}

/**
 * Organize with year/month/title/index.md but keep the old URL slugs.
 */
export function removeDateFromSlug(slug: string): string {
  return slug.replace(/^\/\d{4}\/\d{2}/, '')
}
