import { Layout } from '../components/layout'
import React from 'react'
import { SEO } from '../components/seo'

const NotFoundPage = (): JSX.Element => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Ups, die Seite konnte nicht gefunden werden.</h1>
    <p>Es sieht danach aus dass nichts gefunden wurde an dieser Stelle. Vielleicht hilft die Suchfunktion?</p>
  </Layout>
)

export default NotFoundPage
