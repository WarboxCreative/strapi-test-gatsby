import { GatsbyImage } from '@contracts/gatsby'

export type StrapiFieldText = string

export type StrapiFieldRichText = {
	data: {
		content: string
	}
}

// Plugin Components
export type StrapiMenus = {
	attributes: {
		slug: string
		items: {
			data: StrapiMenu[]
		}
	}
}

export type StrapiMenu = {
	attributes: {
		title: string
		url: string
		target: string | null
	}
}

// Custom Components
export type StrapiImageComponent = {
	image: GatsbyImage
	altText?: string
}
