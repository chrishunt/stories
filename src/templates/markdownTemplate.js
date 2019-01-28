import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Avatar from "../components/avatar"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO title={frontmatter.title} keywords={
        [`adventure`, `overland`, `blog`, `outdoors`, `tacoma`, `offroad`]
      } />
      <div className="story-container">
        <div className="story">
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
            <h1>{frontmatter.title}</h1>
            <h4>{frontmatter.subtitle}</h4>
            <h4>{frontmatter.date}</h4>
          </div>
          <div
            className="story-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        subtitle
      }
    }
  }
`
