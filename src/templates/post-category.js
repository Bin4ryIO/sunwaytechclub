import React from "react"
import Link from "gatsby-link"
import * as PropTypes from "prop-types"

import { rhythm } from "../utils/typography"

const propTypes = {
  data: PropTypes.object.isRequired,
}

class PostCategoryTemplate extends React.Component {
  render() {
    const category = this.props.data.contentfulPostCategory
    const { title, post, featuredImage } = category
    return (
      <div>
        <div
          style={{
            display: `flex`,
            alignItems: `center`,
            marginBottom: rhythm(1 / 2),
          }}
        >
          {/* <img
            style={{
              height: featuredImage.responsiveResolutionheight,
              width: featuredImage.responsiveResolutionwidth,
              marginRight: rhythm(1 / 2),
            }}
            src={featuredImage.responsiveResolutionsrc}
            srcSet={featuredImage.responsiveResolutionsrcSet}
          /> */}
          <h4 style={{ marginBottom: 0 }}>
            {title}
          </h4>
        </div>
        <h1>
          {title}
        </h1>
        <div>
          <span>Posts</span>
          <ul>
            {post &&
              post.map((p, i) =>
                <li key={i}>
                  <Link to={`/post/${p.slug}`}>
                    {p.title}
                  </Link>
                </li>
              )}
          </ul>
        </div>
      </div>
    )
  }
}

PostCategoryTemplate.propTypes = propTypes

export default PostCategoryTemplate

export const pageQuery = graphql`
  query postCategoryQuery($id: String!) {
    contentfulPostCategory(id: { eq: $id }) {
      id
      title
      post {
        id
        title
      }
      # featuredImage {
      #   responsiveResolution(width: 75) {
      #     src
      #     srcSet
      #     height
      #     width
      #   }
      # }
    }
  }
`
