import React from 'react'
import { HeadProps, PageProps } from 'gatsby'

import { SimplePage as SimplePageProps } from '../contracts/simple-page'
import { GatsbyImage } from 'gatsby-plugin-image'
import SEO from '../components/Layout/SEO'

interface PageContextProps {
	data: {
		page: SimplePageProps
	}
}

const SimplePage = (props: PageProps<object, PageContextProps>) => {
	const { page } = props.pageContext.data

	return (
		<article>
			<h1>{page.title}</h1>
			<div>
				<GatsbyImage image={page.featuredImage.localFile.childImageSharp.gatsbyImageData} alt="" />
			</div>
			<div dangerouslySetInnerHTML={{ __html: page.content.data.content }}></div>
		</article>
	)
}

export function Head(props: HeadProps<object, PageContextProps>) {
	const { seo } = props.pageContext.data.page

	return <SEO seo={seo} twitter={true} />
}

export default SimplePage
