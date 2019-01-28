import React from 'react'
import { graphql } from "gatsby"

import Layout from '../components/layout'
import Avatar from '../components/avatar'
import SEO from '../components/seo'

import StoryLink from "../components/story-link"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Stories = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <StoryLink key={edge.node.id} post={edge.node} />)

  return <Layout>
    <SEO title='Stories' keywords={
      [`adventure`, `overland`, `blog`, `outdoors`, `tacoma`, `offroad`]
    } />
    <div className="text title" style={{
        textAlign: `center`,
      }}
    >
      <p>
        <div
          style={{
            width: `150px`,
            marginLeft: `auto`,
            marginRight: `auto`,
          }}
        >
          <a href='/'><Avatar /></a>
        </div>
      </p>
      <h1>Chris Hunt</h1>
      <h4>
        <a href="/follow">subscribe</a>
        {` `} &middot; {` `}
        <a href="https://www.instagram.com/huntca/">instagram</a>
      </h4>
      <p></p>
      <div className="stories">
        {Stories}
      </div>
    </div>
  </Layout>
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            subtitle
            cover_image {
              publicURL
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
