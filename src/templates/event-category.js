import React from "react"
import Link from "gatsby-link"
import * as PropTypes from "prop-types"

import { rhythm } from "../utils/typography"

const propTypes = {
  data: PropTypes.object.isRequired,
}

class EventCategoryTemplate extends React.Component {
  render() {
    const category = this.props.data.contentfulEventCategory
    const { title, description, featuredImage } = category
    const imageUrl = featuredImage.file.url
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
              src={imageUrl}
            />
          </div>
          <div style={{ display: `flex`, flexDirection: `column` }}>
            <h4 style={{ marginBottom: 0 }}>{title}</h4>
          </div>
        </div>
        <h1>{title}</h1>
        {/* <div>
          <span>Products</span>
          <ul>
            {product &&
              product.map((p, i) =>
                <li key={i}>
                  <Link to={`/products/${p.id}`}>{p.productName}</Link>
                </li>
              )}
          </ul>
        </div> */}
      </div>
    )
  }
}

EventCategoryTemplate.propTypes = propTypes

export default EventCategoryTemplate

export const pageQuery = graphql`
  query categoryQuery($id: String!) {
    contentfulEventCategory(id: { eq: $id }) {
      title
      featuredImage {
        file {
          url
        }
      }
      description
      post {
        id
        title
      }
    }
  }
`
