import React from 'react'
import { graphql } from 'gatsby'
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
					<div dangerouslySetInnerHTML={{ __html: marked(post.content.data.content)}}></div>
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
