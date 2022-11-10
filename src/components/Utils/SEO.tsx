import React from 'react'

import { useLocation } from '@reach/router'
import { useSiteMetadata } from '../../hooks/useSiteMetadata'

import { SEOProps } from '../../contracts/shared'

interface Props {
	seo: SEOProps
	children?: React.ReactNode[]
	twitter: true | false
}

const SEO = (props: Props) => {
	const { seo } = props

	const location = useLocation()
	const siteMetadata = useSiteMetadata()

	return (
		<>
			<title>
				{seo.metaTitle} - {siteMetadata.title}
			</title>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta name="description" content={seo.metaDescription} />

			<meta name="og:title" content={seo.metaTitle} />
			<meta name="og:description" content={seo.metaDescription} />
			<meta
				name="og:image"
				content={seo.socialImage.localFile.childImageSharp.gatsbyImageData.images.fallback?.src}
			/>
			<meta name="og:url" content={siteMetadata.siteUrl + location.pathname} />

			{props.twitter && (
				<>
					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:title" content={seo.metaTitle} />
					<meta name="twitter:url" content={siteMetadata.siteUrl + location.pathname} />
					<meta
						name="twitter:image"
						content={seo.socialImage.localFile.childImageSharp.gatsbyImageData.images.fallback?.src}
					/>
					<meta name="twitter:creator" content={siteMetadata.twitterHandle} />
					<meta name="twitter:description" content={seo.metaDescription} />
				</>
			)}

			{props.children}
		</>
	)
}

SEO.defaultProps = {
	twitter: false,
}

export default SEO
