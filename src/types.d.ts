interface IPageInput {
  path: string
  component: string
  layout?: string
  context?: any
}

interface IBoundActionCreators {
  createPage: (page: IPageInput) => void
  deletePage: (page: IPageInput) => void
  createRedirect: (opts: {
    fromPath: string
    isPermanent?: boolean
    redirectInBrowser?: boolean
    toPath: string
  }) => void
}
export type GatsbyCreatePages = (fns: { graphql: any; actions: IBoundActionCreators }) => void

export interface IContacts {
  linkedin: string
  github: string
  twitter: string
}

export interface ILabels {
  tag: string
  tech: string
  name: string
  size: number
  color: string
  viewBox: string
}

export interface ISiteMetadata {
  title: string
  description: string
  author: string
  contacts: {
    twitter: string
  }
  labels: ILabels[]
  url: string
}

export interface ISite {
  site: {
    siteMetadata: ISiteMetadata
  }
}

export interface IMarkdownRemark {
  id: string
  excerpt: string
  fields: {
    slug: string
  }
  frontmatter: {
    date: string
    tags?: string[]
    title: string
  }
  html: string
  timeToRead: number
}

export interface IEdge {
  node: IMarkdownRemark
}

export interface IAllMarkdownRemark {
  allMarkdownRemark: {
    edges: IEdge[]
    totalCount: number
  }
}

export interface IData extends IAllMarkdownRemark, ISite {
  markdownRemark: IMarkdownRemark
}
