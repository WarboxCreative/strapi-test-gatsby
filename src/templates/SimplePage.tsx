import React from 'react'

import { SimplePage as SimplePageProps } from '../contracts/simple-page'

type Props = {
	pageContext: {
		data: {
			page: SimplePageProps
		}
	}
}

const SimplePage = (props: Props) => {
	const { page } = props.pageContext.data

	return (
		<article>
			<h1>{page.title}</h1>
			<div dangerouslySetInnerHTML={{ __html: page.content.data.content }}></div>
		</article>
	)
}

export default SimplePage
