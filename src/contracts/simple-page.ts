import { GatsbyImage } from './gatsby'

import { SEOProps } from './shared'
import { StrapiFieldRichText, StrapiFieldText } from './strapi'

export interface SimplePage {
	id: string
	slug: string
	title: StrapiFieldText
	content: StrapiFieldRichText
	featuredImage: GatsbyImage
	seo: SEOProps
}

export interface SimplePages extends Array<SimplePage> {}

export interface StrapiSimplePagesQueryResult {
	nodes: SimplePages
}
