import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Упс, ошиб очка!</h1>
    <p>К сожалению, запрашиваемая страница не найдена, поищи другие.</p>
  </Layout>
)

export default NotFoundPage
