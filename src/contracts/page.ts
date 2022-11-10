import { SEOProps } from '@contracts/shared'
import { StrapiFieldRichText, StrapiFieldText, StrapiImageComponent } from '@contracts/strapi'

export interface PageProps {
	id: string
	slug: string
	title: StrapiFieldText
	content: StrapiFieldRichText
	featuredImage: StrapiImageComponent
	seo: SEOProps
}

export type PagesProps = Array<PageProps>

export interface PagesQueryProps {
	nodes: PagesProps
}
