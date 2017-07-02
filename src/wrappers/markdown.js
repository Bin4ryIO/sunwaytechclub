import React from 'react'
import PropTypes from 'prop-types'
// import '../css/markdown-styles.css'
// import Helmet from 'react-helmet'
// import { config } from 'config'

import marked from 'marked'

export default class Markdown extends React.Component {
  constructor(props) {
    super(props)

    marked.setOptions({
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartypants: false
    })
  }
  
  static propTypes = {
    router: PropTypes.object,
  }

  render() {
    const post = this.props.route.page.data,
      md = marked(post.body || '')
    return (
      <div className="markdown">
        {/* <Helmet title={`${config.siteTitle} | ${post.title}`} /> */}
        <h1>{post.title}</h1>
        {/* <div dangerouslySetInnerHTML={{ __html: post.body }} /> */}
        <div dangerouslySetInnerHTML={{ __html: post.md }} />
      </div>
    )
  }
}
