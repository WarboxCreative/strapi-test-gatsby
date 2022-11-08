const path = require("path")

import { SimplePage } from './src/contracts/simple-page'

// @ts-check

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
// @ts-ignore
exports.createPages = async ({ graphql, actions, reporter }) => {
	const { createPage } = actions

	// Get all templates that we're going to use below
	const SimplePageTemplate = path.resolve(`src/templates/SimplePage.tsx`)

	// Create Simple Pages
	const SimplePagesQuery = await graphql(`
		query AllSimplePageQuery {
			allStrapiSimplePage {
				nodes {
					id
					slug
					title
					content {
						data {
							content
						}
					}
					featuredImage {
						localFile {
							childImageSharp {
								gatsbyImageData
							}
						}
					}
					seo {
						metaTitle
						metaDescription
						socialImage {
							localFile {
								childImageSharp {
									gatsbyImageData
								}
							}
						}
					}
				}
			}
		}
	`)

	if (SimplePagesQuery.errors) {
		return reporter.panicOnBuild('Error while running GraphQL query "AllSimplePageQuery"')
	} else {
		SimplePagesQuery.data.allStrapiSimplePage.nodes.forEach((page: SimplePage) => {
			createPage({
				path: `/${page.slug}`,
				component: SimplePageTemplate,
				context: {
					data: { page }
				},
			})
		})
	}
}
