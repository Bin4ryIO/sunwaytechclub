import React from "react"
import Link from "gatsby-link"
import * as PropTypes from "prop-types"

import { rhythm } from "../utils/typography"

const propTypes = {
  data: PropTypes.object.isRequired,
}

class PostTemplate extends React.Component {
  render() {
    const post = this.props.data.contentfulPost
    const {
      title,
      slug,
      category,
      author,
      description,
      content,
      featuredImage,
    } = post
    return (
      <div>
        <div style={{ display: `flex`, marginBottom: rhythm(1 / 2) }}>
          <div style={{ height: rhythm(2), width: rhythm(2) }}>
            <img
              style={{
                height: `auto`,
                width: `auto`,
                maxWidth: rhythm(2),
                maxHeight: rhythm(2),
                marginRight: rhythm(1 / 2),
              }}
              src={image[0].file.url}
            />
          </div>
          <div style={{ display: `flex`, flexDirection: `column` }}>
            <h4 style={{ marginBottom: 0 }}>{title}</h4>
          </div>
        </div>
        <h1>{title}</h1>
        <div>
          <span>Price: ${price}</span>
          <div dangerouslySetInnerHTML={{ __html: content }} />
          {/* <div>
            <span>See other: </span>
            <ul>
              {categories.map((category, i) =>
                <li key={i}>
                  <Link key={i} to={`/categories/${category.id}`}>
                    {category.title}
                  </Link>
                </li>
              )}
            </ul>
          </div> */}
        </div>
      </div>
    )
  }
}

PostTemplate.propTypes = propTypes

export default PostTemplate

export const pageQuery = graphql`
  query postQuery($id: String!) {
    contentfulPost(id: { eq: $id }) {
      title
      slug
      category {
        id
        title
      }
      author {
        id
        fullName
      }
      description
      content
      featuredImage {
        file {
          url
        }
      }
    }
  }
`