import './recent-posts.scss'
import { Link } from 'gatsby'
import React from 'react'

interface IPost {
  node: {
    frontmatter: {
      title: string
    }
    fields: {
      slug: string
    }
  }
}

interface IProps {
  posts: IPost[]
}

function getPostLinks(posts: IPost[]): JSX.Element[] {
  if (!Array.isArray(posts)) {
    return []
  }

  const postLinks: JSX.Element[] = []

  for (let i = 0; i < 5; i++) {
    if (!posts[i]) {
      break
    }

    postLinks.push(
      <li key={`recent-post-${i}`}>
        <Link to={posts[i].node.fields.slug}>{posts[i].node.frontmatter.title}</Link>
      </li>
    )
  }

  return postLinks
}

export const RecentPosts = ({ posts }: IProps): JSX.Element => {
  return (
    <div className="p-4">
      <h4 className="font-italic">Letzte Artikel</h4>
      <ul className="list-unstyled mb-0 recent-posts">{getPostLinks(posts)}</ul>
    </div>
  )
}
