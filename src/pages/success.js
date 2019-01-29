import React from 'react'

import Layout from '../components/layout'
import Avatar from '../components/avatar'
import SEO from '../components/seo'

const SuccessPage = () => (
  <Layout>
    <SEO title='Follow my stories' keywords={
      [`adventure`, `overland`, `blog`, `outdoors`, `tacoma`, `offroad`]
    } />

  <div className="text title">
    <h4 className='avatar'>
      <a href="/"><div
          style={{
            width: `50px`,
            display: `inline-block`,
            padding: `0 0.4rem 0 0`,
            margin: `-25px 0 0 0`,
            position: `relative`,
            top: `15px`
          }}
        >
          <Avatar />
      </div></a>
      <div
        style={{
          display: `inline-block`,
        }}
      >
        <a href="/follow">follow</a>
        {` `} my stories
      </div>
    </h4>
    <p>
      <em>Thanks for following!</em>
    </p>
    <p>
      I'll be sure to send you an email next time I post a story.
    </p>
  </div>
  </Layout>
)

export default SuccessPage
