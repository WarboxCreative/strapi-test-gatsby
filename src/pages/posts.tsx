import React from 'react'

import { graphql } from 'gatsby'
import { marked } from 'marked'
import { PostsQueryResult } from '../contracts/post'

type Props = {
	data: {
		allStrapiPost: PostsQueryResult
	}
}

const posts = (props: Props) => {
	return (
		<div>
			{props.data.allStrapiPost.nodes.map((post) => {
				return (
					<article key={post.id}>
						<h2>{post.title}</h2>
						<div dangerouslySetInnerHTML={{ __html: marked(post.content.data.content) }}></div>
					</article>
				)
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
