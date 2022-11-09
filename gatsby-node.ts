const path = require("path")
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin')

import { SimplePage } from '@contracts/simple-page'

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

// @ts-ignore
exports.onCreateWebpackConfig = ({ actions }) => {
	actions.setWebpackConfig({
		resolve: {
			// Setup some aliases for our imports
			alias: {
				'@components': path.resolve(__dirname, 'src/components'),
				'@hooks': path.resolve(__dirname, 'src/hooks'),
				'@contracts': path.resolve(__dirname, 'src/contracts'),
				'@styles': path.resolve(__dirname, 'src/styles'),
				'@images': path.resolve(__dirname, 'src/images'),
			},
		},
		plugins: [
			// We use this to ignore the conflicting order errors. We're using css modules so these can be safely ignored 
			new FilterWarningsPlugin({
				exclude: /mini-css-extract-plugin[^]*Conflicting order./,
			}),
		],
	})
}
