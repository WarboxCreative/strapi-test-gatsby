import { GatsbyImage } from './gatsby'
import { StrapiFieldRichText, StrapiFieldText } from './strapi'

export interface SimplePageBasic {
	id: string
	title: StrapiFieldText
	content: StrapiFieldRichText
}

export interface SimplePage extends SimplePageBasic {
	featuredImage: GatsbyImage
}

export interface SimplePagesBasic extends Array<SimplePageBasic> {}

export interface StrapiSimplePagesBasicQueryResult {
	nodes: SimplePagesBasic
}
