import { GatsbyImage } from './gatsby'
import { StrapiFieldRichText, StrapiFieldText } from './strapi'

export interface SimplePage {
	id: string
	title: StrapiFieldText
	content: StrapiFieldRichText
	featuredImage: GatsbyImage
}

export interface SimplePagesBasic extends Array<SimplePage> {}

export interface StrapiSimplePagesQueryResult {
	nodes: SimplePagesBasic
}
