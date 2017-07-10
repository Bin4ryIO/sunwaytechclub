import React from "react"
import Link from "gatsby-link"
import * as PropTypes from "prop-types"
import { rhythm } from "../utils/typography"

import "typeface-montserrat"
import "typeface-varela-round"

const propTypes = {
  data: PropTypes.object.isRequired,
}

const Post = ({ node }) =>
  <div key={node.slug}>
    <Link
      style={{ color: `inherit`, textDecoration: `none` }}
      to={`/post/${node.slug}/`}
    >
      <div
        style={{
          display: `flex`,
          alignItems: `center`,
          borderBottom: `1px solid lightgray`,
          paddingBottom: rhythm(1 / 2),
          marginBottom: rhythm(1 / 2),
        }}
      >
        {/* <div style={{ marginRight: rhythm(1 / 2) }}>
          {node.featuredImage.responsiveResolution.src &&
            <img
              style={{ margin: 0 }}
              width={node.featuredImage.responsiveResolution.width}
              height={node.featuredImage.responsiveResolution.height}
              src={node.featuredImage.responsiveResolution.src}
              srcSet={node.featuredImage.responsiveResolution.srcSet}
            />}
        </div> */}
        <div style={{ flex: 1 }}>
          {node.title}
        </div>
      </div>
    </Link>
  </div>

class IndexPage extends React.Component {
  render() {
    const usPostEdges = this.props.data.us.edges
    return (
      <div style={{ marginBottom: rhythm(2) }}>
        <br />
        {usPostEdges.map(({ node }, i) => <Post node={node} />)}
      </div>
    )
  }
}

IndexPage.propTypes = propTypes

export default IndexPage

export const pageQuery = graphql`
  query PageQuery {
    us: allContentfulPost(filter: { node_locale: { eq: "en-US" } }) {
      edges {
        node {
          id
          slug
          title
          featuredImage {
            responsiveResolution(width: 75) {
              src
              srcSet
              height
              width
            }
          }
        }
      }
    }
  }
`
