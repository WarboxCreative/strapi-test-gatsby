import { graphql, useStaticQuery } from "gatsby"

interface SiteMetadataProps {
	site: {
		siteMetadata: {
			siteUrl: string
		}
	}
}

export const useSiteMetadata = () => {
	const data: SiteMetadataProps = useStaticQuery(graphql`
		query SiteMetadataQuery {
			site {
				siteMetadata {
					siteUrl
				}
			}
		}
	`)

	return data.site.siteMetadata
}
