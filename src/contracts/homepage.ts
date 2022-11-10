import { SEOProps } from '@contracts/shared'
import { StrapiFieldRichText, StrapiFieldText } from '@contracts/strapi'

export interface HomepageDataProps {
	strapiHomepage: {
		title: StrapiFieldText
		content: StrapiFieldRichText
		seo: SEOProps
	}
}
