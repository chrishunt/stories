import React from 'react'

import Layout from '../components/layout'
import Avatar from '../components/avatar'
import SEO from '../components/seo'

const FollowPage = () => (
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
      If you'd like to recieve an email when I publish a new story, you've come
      to the right place!  Submit your email below and I'll let you know when
      there's something new to read.
    </p>
    <p>
      <form name="follow" method="POST" action="/success/" data-netlify="true" data-netlify-honeypot="bot-field">
        <p>
          <input
            type="email"
            name="email"
            placeholder="Enter you email address"
          />
        </p>
        <p>
          <button type="submit">Subscribe</button>
        </p>
        <p class="bot-field"><input name="bot-field" /></p>
      </form>
    </p>
  </div>
  </Layout>
)

export default FollowPage
