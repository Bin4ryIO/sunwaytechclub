import React from "react"
import Link from "gatsby-link"
import * as PropTypes from "prop-types"

import { rhythm } from "../utils/typography"

const propTypes = {
  data: PropTypes.object.isRequired,
}

class EventTemplate extends React.Component {
  render() {
    const event = this.props.data.contentfulEvent
    const {
      title,
      slug,
      category,
      description,
      content,
      image,
      dateTime,
      location,
    } = event
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
        <h3>{description}</h3>
        <h5>{category.title}</h5>
        <div>
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

EventTemplate.propTypes = propTypes

export default EventTemplate

export const pageQuery = graphql`
  query eventQuery($id: String!) {
    contentfulEvent(id: { eq: $id }) {
      title
      slug
      category {
        id
        title
      }
      description
      content
      image {
        file {
          url
        }
      }
      dateTime
      location
    }
  }
`