import { GatsbyImage } from './gatsby'

import { SEOProps } from './shared'
import { StrapiFieldRichText, StrapiFieldText } from './strapi'

export interface PageProps {
	id: string
	slug: string
	title: StrapiFieldText
	content: StrapiFieldRichText
	featuredImage: GatsbyImage
	seo: SEOProps
}

export interface PagesProps extends Array<PageProps> {}

export interface PagesQueryProps {
	nodes: PagesProps
}
