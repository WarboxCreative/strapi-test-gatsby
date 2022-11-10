const path = require('path')
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin')

import { GatsbyNode } from 'gatsby'

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions, reporter }) => {
	const { createPage } = actions

	// Get all templates that we're going to use below
	const PageTemplate = path.resolve(`src/templates/Page.tsx`)

	// Create Pages
	const PagesQuery = await graphql(`
		query AllPages {
			allStrapiPage {
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
						image {
							localFile {
								childImageSharp {
									gatsbyImageData(width: 1200, placeholder: BLURRED, formats: [WEBP, JPG])
								}
							}
						}
						altText
					}
					seo {
						metaTitle
						metaDescription
						socialImage {
							localFile {
								childImageSharp {
									gatsbyImageData(width: 1200, placeholder: BLURRED, formats: [WEBP, JPG])
								}
							}
						}
					}
				}
			}
		}
	`)

	if (PagesQuery.errors) {
		reporter.panicOnBuild('Error while running GraphQL query "AllPages"')
	} else {
		const data = PagesQuery.data as Queries.AllPagesQuery

		data.allStrapiPage.nodes.forEach((page) => {
			createPage({
				path: `/${page.slug}`,
				component: PageTemplate,
				context: {
					data: { page }
				},
			})
		})
	}
}

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({ actions, }) => {
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
