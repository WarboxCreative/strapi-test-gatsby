import { graphql, useStaticQuery } from "gatsby"

interface SiteMetadataProps {
	site: {
		siteMetadata: {
			siteUrl: string
			title: string
			twitterHandle: string
		}
	}
}

export const useSiteMetadata = () => {
	const data: SiteMetadataProps = useStaticQuery(graphql`
		query SiteMetadataQuery {
			site {
				siteMetadata {
					siteUrl
					title
					twitterHandle
				}
			}
		}
	`)

	return data.site.siteMetadata
}
