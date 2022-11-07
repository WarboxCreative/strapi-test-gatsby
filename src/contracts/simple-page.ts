import { GatsbyImage } from './gatsby'
import { StrapiFieldRichText, StrapiFieldText } from './strapi'

export interface SimplePage {
	id: string
	slug: string
	title: StrapiFieldText
	content: StrapiFieldRichText
	featuredImage: GatsbyImage
}

export interface SimplePages extends Array<SimplePage> {}

export interface StrapiSimplePagesQueryResult {
	nodes: SimplePages
}
