import * as React from 'react'

import { HeadProps, PageProps, graphql } from 'gatsby'

import RichText from '@components/Content/RichText/RichText'
import Container from '@components/Layout/Container'
import Layout from '@components/Layout/Layout'
import SEO from '@components/Utils/SEO'

import { HomepageDataProps } from '@contracts/homepage'

const IndexPage = ({ data }: PageProps<HomepageDataProps>) => {
	const { strapiHomepage } = data

	return (
		<Layout>
			<Container>
				<h1>{strapiHomepage.title}</h1>
				<RichText content={strapiHomepage.content} />
			</Container>
		</Layout>
	)
}

export const query = graphql`
	query HomepageQuery {
		strapiHomepage {
			title
			content {
				data {
					content
				}
			}
			seo {
				metaTitle
				metaDescription
				socialImage {
					localFile {
						childImageSharp {
							gatsbyImageData(width: 1200, formats: WEBP)
						}
					}
				}
			}
		}
	}
`

export default IndexPage

export function Head({ data }: HeadProps<HomepageDataProps>) {
	const { strapiHomepage } = data

	return <SEO seo={strapiHomepage.seo} twitter={true} />
}
