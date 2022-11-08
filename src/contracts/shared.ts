import { GatsbyImage } from './gatsby'

export interface SEOProps {
	metaTitle: string
	metaDescription: string
	socialImage: GatsbyImage
}

export interface SiteMetadataProps {
	siteUrl: string
}
