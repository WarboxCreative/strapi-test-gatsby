import React from 'react'

import { PageProps as GatsbyPageProps, HeadProps } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import RichText from '@components/Content/RichText/RichText'
import Container from '@components/Layout/Container'
import Layout from '@components/Layout/Layout'
import SEO from '@components/Utils/SEO'

import { PageProps } from '@contracts/page'

interface PageContextProps {
	data: {
		page: PageProps
	}
}

const Page = (props: GatsbyPageProps<null, PageContextProps>) => {
	const { page } = props.pageContext.data

	return (
		<Layout>
			<article>
				<Container>
					<h1>{page.title}</h1>
					<div>
						<GatsbyImage
							image={page.featuredImage.image.localFile.childImageSharp.gatsbyImageData}
							alt=""
						/>
					</div>
					<RichText content={page.content} />
				</Container>
			</article>
		</Layout>
	)
}

export function Head(props: HeadProps<object, PageContextProps>) {
	const { seo } = props.pageContext.data.page

	return <SEO seo={seo} twitter={true} />
}

export default Page
