import React from 'react'

import { graphql } from 'gatsby'
import { marked } from 'marked'
import { StrapiPostsQueryResult } from '../contracts/post'

type Props = {
	data: {
		allStrapiPost: StrapiPostsQueryResult
	}
}

const posts = (props: Props) => {
	console.log(props.data.allStrapiPost)
  return (
	  <div>
		  {props.data.allStrapiPost.nodes.map((post) => {
			  return <article key={post.id}>
				  <h2>{post.Title}</h2>
				  <div dangerouslySetInnerHTML={{ __html: marked(post.Content.data.Content)}}></div>
			  </article>
		  })}
	</div>
  )
}

export const query = graphql`
query AllPostsQuery {
  allStrapiPost {
    nodes {
      id
      Title
      Content {
        data {
          Content
        }
      }
    }
  }
}
`

export default posts
