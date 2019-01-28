import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const StoryLink = ({ post }) => (
  <p>
    <div>
      <Link to={post.frontmatter.path}>
        <Img fluid={post.frontmatter.cover_image.childImageSharp.fluid} />
        <h1>{post.frontmatter.title}</h1>
        <h4>{post.frontmatter.subtitle}</h4>
        <h4>{post.frontmatter.date}</h4>
      </Link>
    </div>
  </p>
)

export default StoryLink
