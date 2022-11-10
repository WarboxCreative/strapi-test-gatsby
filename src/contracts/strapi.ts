import { GatsbyImage } from '@contracts/gatsby'

export type StrapiFieldText = string

export type StrapiFieldRichText = {
	data: {
		content: string
	}
}

// Custom Components
export type StrapiImageComponent = {
	image: GatsbyImage
	altText?: string
}
