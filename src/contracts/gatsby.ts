import { IGatsbyImageData } from 'gatsby-plugin-image'

export interface GatsbyImage {
	localFile: {
		childImageSharp: {
			gatsbyImageData: IGatsbyImageData
		}
	}
}
