import { ILabels } from '../../types'
import React from 'react'
import { TechTag } from './TechTag'
import { kebabCase } from '../../lib/utils'

export function getTechTags(allTags: ILabels[], usedTags?: string[], noFilter = false): JSX.Element[] {
  if (!Array.isArray(usedTags)) {
    return []
  }

  const techTags: JSX.Element[] = []

  for (let i = 0; i < usedTags.length; i++) {
    const definedTag = allTags.find(({ tag }: ILabels): boolean => tag === usedTags[i])

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
          tag={kebabCase(usedTags[i])}
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
