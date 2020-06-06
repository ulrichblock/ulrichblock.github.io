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
      <li className="m-0">
        <Link to={posts[i].node.fields.slug} className="">
          {posts[i].node.frontmatter.title}
        </Link>
      </li>
    )
  }

  return postLinks
}

export const RecentPosts = ({ posts }: IProps): JSX.Element => {
  return (
    <>
      <h4 className="m-0">Letzte Artikel</h4>
      <div className="d-block recent-posts mt-2">
        <ul>{getPostLinks(posts)}</ul>
      </div>
    </>
  )
}
