import { ILabels } from '../../types'
import React from 'react'
import { TechTag } from '../tags/TechTag'

interface IPost {
  node: {
    frontmatter: {
      tags: string[]
    }
  }
}

interface IProps {
  labels: ILabels[]
  posts: IPost[]
}

function getUsedTags(posts: IPost[]): string[] {
  const tags: string[] = []

  for (const post of posts) {
    for (const tag of post.node.frontmatter.tags || []) {
      if (!tags.includes(tag)) {
        tags.push(tag)
      }
    }
  }

  return tags
}

function getTechTags(allTags: ILabels[], posts: IPost[]): JSX.Element[] {
  if (!Array.isArray(allTags) || !Array.isArray(posts)) {
    return []
  }

  const techTags: JSX.Element[] = []
  const usedTags = getUsedTags(posts)

  for (let i = 0; i < allTags.length; i++) {
    if (usedTags.includes(allTags[i].tag)) {
      techTags.push(
        <TechTag
          key={i}
          tag={allTags[i].tag}
          tech={allTags[i].tech}
          name={allTags[i].name}
          size={allTags[i].size}
          color={allTags[i].color}
          viewBox={allTags[i].viewBox}
        />
      )
    }
  }

  return techTags
}

/**
 * Display of all configured tags.
 * A blog/page might contain more.
 */
export const TechTags = ({ labels, posts }: IProps): JSX.Element => {
  return (
    <>
      <h4 className="m-0">Tech Topics</h4>
      <div className="d-block pl-2">{getTechTags(labels, posts)}</div>
    </>
  )
}
