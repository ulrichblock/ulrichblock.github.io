import { StaticQuery, graphql } from 'gatsby'
import { Layout } from '../components/Layout2'
import React from 'react'
import { SEO } from '../components/SEO2'
import { Search } from '../components/search/Search'
import { Sidebar } from '../components/sidebar/Sidebar'

const SearchList = (): JSX.Element => {
  return (
    <StaticQuery
      query={graphql`
        query SiteSearchIndex {
          siteSearchIndex {
            index
          }
        }
      `}
      render={data => (
        <>
          <Layout>
            <SEO title="Steam Apps" />
            <div className="index-main">
              <div className="post-list-main">
                <h1>Suche</h1>
                <Search searchIndex={data.siteSearchIndex.index} />
              </div>

              <div className="sidebar px-2 py-2">
                <Sidebar />
              </div>
            </div>
          </Layout>
        </>
      )}
    />
  )
}

export default SearchList
