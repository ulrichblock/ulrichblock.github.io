import { ITag, TechTag } from './TechTag'
import React from 'react'

function tagToSlug(value: string): string {
  return Array.from(value.toLowerCase().matchAll(/([a-z0-9]+)/g))
    .map(([, part]): string => part)
    .join('-')
}

export function getTechTags(allTags: ITag[], usedTags: string[], noFilter = false): JSX.Element[] {
  if (!Array.isArray(usedTags)) {
    return []
  }

  const techTags: JSX.Element[] = []

  for (let i = 0; i < usedTags.length; i++) {
    const definedTag = allTags.find(({ tag }: ITag): boolean => tag === usedTags[i])

    if (definedTag) {
      techTags.push(
        <TechTag
          key={i}
          tag={definedTag.tag}
          tech={definedTag.tech}
          name={definedTag.name}
          size={definedTag.size}
          color={definedTag.color}
          viewBox={definedTag.viewBox}
        />
      )
    } else if (noFilter) {
      techTags.push(
        <TechTag
          key={i}
          tag={tagToSlug(usedTags[i])}
          tech={usedTags[i]}
          name=""
          size={20}
          color="white"
          viewBox="10 20 199 199"
        />
      )
    }
  }

  return techTags
}
