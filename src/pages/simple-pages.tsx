import React from 'react'
import { Link, graphql } from 'gatsby'
import { marked } from 'marked'

import { StrapiSimplePagesQueryResult } from '../contracts/simple-page'

interface Props {
	data: {
		allStrapiSimplePage: StrapiSimplePagesQueryResult
	}
}

const SimplePage = (props: Props) => {
	return (
		<div>
			{props.data.allStrapiSimplePage.nodes.map((post) => {
				return <article key={post.id}>
					<h2>{post.title}</h2>
					<div dangerouslySetInnerHTML={{ __html: marked(post.content.data.content) }}></div>
					<Link to={`/${post.slug}`}>Read more</Link>
				</article>
			})}
	  	</div>
  	)
}

export const query = graphql`
	query AllSimplePageBasicQuery {
		allStrapiSimplePage {
			nodes {
				id
				slug
				title
				content {
					data {
						content
					}
				}
			}
		}
	}
`

export default SimplePage
