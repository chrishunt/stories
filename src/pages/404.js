import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="text">
      <h1>Uh Oh!</h1>
      <p>
        You've tried to visit a page that doesn't exist. Did you get here by
        accident? How about you <a href='/'>enjoy a story</a>.
      </p>
    </div>
  </Layout>

)

export default NotFoundPage
