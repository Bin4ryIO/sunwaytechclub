import React from "react"
import Link from "gatsby-link"
import * as PropTypes from "prop-types"

const propTypes = {
  data: PropTypes.object.isRequired,
}

class IndexPage extends React.Component {
  render() {
    const postEdges = this.props.data.allContentfulPost.edges
    return (
      <div>
        {postEdges.map((postEdge, i) => {
          const post = postEdge.node
          return (
            <div key={post.id}>
              <Link to={`/post/${post.id}/`}>
                <h4>{post.title}</h4>
              </Link>
            </div>
          )
        })}
      </div>
    )
  }
}

//                 {post.featuredImage[0].file.url &&
                  // <img src={post.featuredImage[0].file.url} />}

IndexPage.propTypes = propTypes

export default IndexPage

export const pageQuery = graphql`
query PageQuery {
  allContentfulPost {
    edges {
      node {
        id
        title
        featuredImage {
          file {
            url
          }
        }
      }
    }
  }
}
`
