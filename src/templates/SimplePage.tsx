import React from 'react'
import { RouteComponentProps } from '@reach/router'

import { SimplePage as SimplePageProps } from '../contracts/simple-page'
import { useSiteMetadata } from '../hooks/useSiteMetadata'
import { GatsbyImage } from 'gatsby-plugin-image'

interface Props extends RouteComponentProps {
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
			<div>
				<GatsbyImage image={page.featuredImage.localFile.childImageSharp.gatsbyImageData} alt="" />
			</div>
			<div dangerouslySetInnerHTML={{ __html: page.content.data.content }}></div>
		</article>
	)
}

export function Head(props: Props) {
	const { location } = props
	const { seo } = props.pageContext.data.page

	const siteMetadata = useSiteMetadata()

	return (
		<>
			<title>{seo.metaTitle}</title>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta name="description" content={seo.metaDescription} />
			<meta name="og:title" content={seo.metaTitle} />
			<meta name="og:description" content={seo.metaDescription} />
			<meta
				name="og:image"
				content={seo.socialImage.localFile.childImageSharp.gatsbyImageData.images.fallback?.src}
			/>
			{location && <meta name="og:url" content={siteMetadata.siteUrl + location.pathname} />}
		</>
	)
}

export default SimplePage
